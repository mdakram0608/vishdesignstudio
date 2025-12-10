import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter once and reuse it (better performance)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // SSL port (more reliable than 587 TLS)
    secure: true, // Use SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    pool: true, // Enable connection pooling
    maxConnections: 1, // Reduced to avoid rate limiting
    connectionTimeout: 30000, // 30 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 45000, // 45 seconds
    tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2',
    },
});

export async function POST(req: NextRequest) {
    try {
        // Parse form data including files
        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const projectType = formData.get('project_type') as string;
        const message = formData.get('message') as string;
        const file = formData.get('file') as File | null;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate file size if file is uploaded
        if (file && file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File size exceeds 10MB limit' },
                { status: 400 }
            );
        }

        // Prepare email content
        const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType || 'Not specified'}

Message:
${message}
        `.trim();

        // Prepare email options
        const mailOptions: any = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: emailContent,
            replyTo: email,
        };

        // Add attachment if file exists
        if (file) {
            const buffer = await file.arrayBuffer();
            const fileBuffer = Buffer.from(buffer);

            mailOptions.attachments = [
                {
                    filename: file.name,
                    content: fileBuffer,
                    contentType: file.type,
                },
            ];
        }

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('❌ Missing EMAIL_USER or EMAIL_PASSWORD environment variables');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact the administrator.' },
                { status: 500 }
            );
        }

        // Send email (must await in serverless functions or email won't send!)
        console.log('📧 Attempting to send email...');
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to:', process.env.EMAIL_TO);

        return NextResponse.json(
            { message: 'Message received! We\'ll get back to you within 24 hours.' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        console.error('Error code:', error.code);
        console.error('Error command:', error.command);

        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again.',
                details: error.code === 'ETIMEDOUT'
                    ? 'Connection timeout. Please check your internet connection.'
                    : error.message
            },
            { status: 500 }
        );
    }
}
