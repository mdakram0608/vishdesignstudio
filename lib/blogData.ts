export interface BlogPost {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    category: string;
    featuredImage: string;
    images: string[];
    excerpt: string;
    content: {
        introduction: string[];
        sections: {
            title: string;
            content: string[];
            subsections?: {
                title: string;
                items?: string[];
                content?: string[];
            }[];
        }[];
        conclusion?: string[];
    };
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'walk-in-wardrobe',
        title: 'Walk in Wardrobe',
        subtitle: 'A Serene Sanctuary: Designing a Modern Walk-In Wardrobe',
        date: '2024-12-05',
        category: 'Interior Design',
        featuredImage: '/blog/blog1/walk_in_wadrobe_view_0.effectsResult.jpg',
        images: [
            '/blog/blog1/walk_in_wadrobe_view_1.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_2.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_3.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_4.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_5.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_6.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_7.effectsResult.jpg',
            '/blog/blog1/walk_in_wadrobe_view_8.effectsResult.jpg',
        ],
        excerpt: 'A walk-in wardrobe is more than just a place to store clothes; it\'s a personal sanctuary, a space dedicated to style, and the first step in starting your day feeling organized and inspired.',
        content: {
            introduction: [
                'A walk-in wardrobe is more than just a place to store clothes; it\'s a personal sanctuary, a space dedicated to style, and the first step in starting your day feeling organized and inspired. When designing this particular walk-in wardrobe, the goal was to create a space that feels both luxurious and highly functional. The result is a clean, modern design that is a testament to the power of thoughtful organization and serene aesthetics.'
            ],
            sections: [
                {
                    title: 'The Power of Palettes: A Study in Serenity',
                    content: [
                        'The primary design choice here was to embrace a minimalist color palette of pristine white and soft gray. This combination creates an atmosphere of calm and cleanliness. The white cabinetry and shelving keep the space feeling open and airy, reflecting light and preventing it from feeling claustrophobic.',
                        'The soft gray drawers add a touch of subtle contrast, grounding the design without adding visual weight. This simple, neutral scheme allows the clothes and accessories within to become the main visual focus, but also serves as a versatile backdrop for future styling changes. The overall mood is one of tranquil elegance, a perfect retreat from the daily routine.'
                    ]
                },
                {
                    title: 'Thoughtful Design: Every Element with a Purpose',
                    content: [
                        'To maximize both style and utility, and ensure durability and functionality for daily use, we focused on a few key interior details:'
                    ],
                    subsections: [
                        {
                            title: 'Lighting Strategy',
                            items: [
                                'Recessed LED Spotlights: The ceiling is generously fitted with energy-efficient LED spotlights. These provide bright, uniform ambient lighting, crucial for seeing true colors of garments. Their flush installation contributes to the clean, modern aesthetic.',
                                'Vanity Task Lighting: At the dual vanity stations, elegant vertical LED strip lights or sleek pendant lights flank the mirrors. These provide excellent, shadow-free task lighting for makeup application and grooming, making the getting-ready process effortless.',
                                'Accent Lighting: Integrated LED strip lights within wardrobe sections or under shelves could be added for a touch of luxury and to highlight specific items.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Flooring',
                    content: [
                        'The textured gray flooring could be achieved with large-format ceramic or porcelain tiles with a subtle pattern. The material is extremely durable and easy to clean. The abstract pattern introduces texture without visual clutter.'
                    ]
                },
                {
                    title: 'Functionality & Storage',
                    content: [
                        'Integrated Vanity Stations: The dual setup is not just about aesthetics; it\'s about efficient use of space, allowing two people to get ready simultaneously.Smart Storage Solutions: A diverse mix of open shelving for display, closed drawers for discreet storage, and dedicated hanging space caters to all garment types.Adjustable Shelving: Incorporating adjustable shelving allows for future flexibility as wardrobe needs change.'
                    ]
                },
                {
                    title: 'Materials & Finishes',
                    content: [
                        'Cabinetry: High-quality MDF or plywood with a durable laminate or PU paint finish was chosen for all built-in units. This offers excellent resistance to wear and is easy to clean and maintain.Hardware: Sleek, minimalist handles (or push-to-open mechanisms) on drawers and doors ensure a clean look and smooth operation.Vanity Countertops: The gray vanity countertops could be made from a durable, non-porous engineered quartz or a high-quality solid surface material.'
                    ]
                },
                {
                    title: 'Beyond the Closet: A Personalized Retreat',
                    content: [
                        'This walk-in wardrobe is designed to be more than just a storage solution—it\'s a retreat, a well-appointed dressing room. The careful selection of materials for their durability and ease of maintenance makes it a pristine and inviting space for years to come. The design\'s overall simplicity and clean lines create a backdrop that is both calming and chic, making the act of choosing an outfit a peaceful and enjoyable experience.'
                    ]
                }
            ]
        }
    },
    {
        slug: 'french-style-bedroom',
        title: 'From Paris, With Love',
        subtitle: 'Timeless Elegance: Designing Your Dream French-Style Bedroom',
        date: '2024-12-03',
        category: 'Bedroom Design',
        featuredImage: '/blog/blog2/11.jpg',
        images: [
            '/blog/blog2/12.jpg',
            '/blog/blog2/13.jpg',
            '/blog/blog2/14.jpg',
            '/blog/blog2/15.jpg',
            '/blog/blog2/16.jpg',
        ],
        excerpt: 'Step into a world of refined beauty and serene luxury with the enchanting allure of a French-style bedroom. Drawing inspiration from classical French design, this aesthetic blends opulence with comfort.',
        content: {
            introduction: [
                'Step into a world of refined beauty and serene luxury with the enchanting allure of a French-style bedroom. Drawing inspiration from classical French design, this aesthetic blends opulence with comfort, creating a sanctuary that feels both grand and inviting. Let\'s explore the key elements that bring this sophisticated style to life.'
            ],
            sections: [
                {
                    title: 'The Essence of French Style: A Balance of Grandeur and Grace',
                    content: [
                        'French interior design is synonymous with timeless elegance. It\'s a delicate dance between intricate details, luxurious materials, and a palette that evokes calm sophistication. It\'s not about overwhelming extravagance, but rather a curated collection of elements that whisper luxury.'
                    ]
                },
                {
                    title: 'The Palette: Soft, Inviting Colors',
                    content: [
                        'Notice in the provided images the pervasive use of creams, soft beiges, and warm off-whites. These foundational colors are crucial for achieving the quintessential French look. They create a serene, expansive backdrop that allows richer textures and gilded accents to shine without being overpowering. This neutral base ensures the room feels light, airy, and incredibly sophisticated.'
                    ]
                },
                {
                    title: 'Opulent Lighting: The Chandelier as a Centerpiece',
                    content: [
                        'One of the most defining features of a French-style bedroom is the ornate chandelier. This isn\'t just a light source; it\'s a sparkling jewel that immediately elevates the room\'s grandeur. Look for chandeliers with multiple tiers, crystal droplets, and a gilded or antique brass finish. Complementing the central chandelier are elegant wall sconces, adding softer ambient light and intricate detailing to the walls.'
                    ]
                },
                {
                    title: 'Furniture: Tufted, Carved, and Curated',
                    content: [
                        'French bedroom furniture is all about graceful silhouettes and exquisite craftsmanship.'
                    ],
                    subsections: [
                        {
                            title: 'The Bed',
                            content: [
                                'The focal point is undoubtedly the tufted headboard, often upholstered in a soft velvet or linen-like fabric in a coordinating neutral tone. This adds a layer of plush comfort and visual richness.'
                            ]
                        },
                        {
                            title: 'Nightstands',
                            content: [
                                'Flanking the bed, ornate nightstands with delicate carvings, cabriole legs, and subtle distressing or a painted finish provide both function and charm.'
                            ]
                        },
                        {
                            title: 'Seating',
                            content: [
                                'A well-chosen armchair or chaise lounge, perhaps with a similar tufted detail, offers a cozy spot for reading or contemplation, enhancing the room\'s luxurious feel.'
                            ]
                        },
                        {
                            title: 'Wardrobe',
                            content: [
                                'Integrated wooden wardrobes blend seamlessly with the room\'s luxurious feel while providing ample, discreet storage. Their classic paneling and light wood tone contribute to the overall sophisticated yet warm ambiance.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Walls: Paneling and Soft Textures',
                    content: [
                        'The walls in a French-style bedroom are often treated with as much care as the furniture. Decorative wall paneling adds architectural interest and a sense of classic grandeur. These panels, painted in the same soft wall color, create subtle shadows and texture, giving the room depth without clutter.'
                    ]
                },
                {
                    title: 'Window Treatments: Drapery with a Flourish',
                    content: [
                        'Long, flowing curtains or drapes are essential. Notice the elegant cream-colored drapes that pool slightly on the floor or just graze it. These should be made from rich fabrics like silk, linen, or velvet, adding softness and a touch of drama. A tie-back allows for natural light while maintaining a refined look.'
                    ]
                },
                {
                    title: 'Soft Furnishings & Accessories: The Finishing Touches',
                    content: [],
                    subsections: [
                        {
                            title: 'Bedding',
                            content: [
                                'Layers of luxurious bedding are key. Think crisp white or cream linens, decorative throw pillows with subtle patterns or embroidery, and a quilted or textured bedspread.'
                            ]
                        },
                        {
                            title: 'Mirrors',
                            content: [
                                'An ornate, full-length mirror or a decorative wall mirror not only serves a practical purpose but also enhances the feeling of space and adds a touch of vintage charm.'
                            ]
                        },
                        {
                            title: 'Decor',
                            content: [
                                'Keep accessories refined. Delicate candle holders, antique-inspired decorative boxes, and perhaps a single, elegant vase with fresh flowers will complete the look. Avoid clutter; instead, opt for a few carefully selected pieces that speak to the room\'s character.'
                            ]
                        }
                    ]
                }
            ],
            conclusion: [
                'By thoughtfully combining these elements—from the soft color palette and sparkling chandeliers to the elegant tufted furniture and luxurious textiles—you can transform your bedroom into a sophisticated and tranquil French-inspired haven. It\'s about creating a room that feels both grand for special moments and utterly comfortable for everyday living.'
            ]
        }
    },
    {
        slug: 'modern-monochrome-bathroom',
        title: 'Black, White, and Intent',
        subtitle: 'The Monolithic Geometry of Modern Luxury',
        date: '2024-12-01',
        category: 'Bathroom Design',
        featuredImage: '/blog/blog3/bathroom_view_1.effectsResult.jpg',
        images: [
            '/blog/blog3/bathroom_view_2.effectsResult.jpg',
            '/blog/blog3/bathroom_view_3.effectsResult.jpg',
            '/blog/blog3/bathroom_view_4.effectsResult.jpg',
            '/blog/blog3/bathroom_view_5.effectsResult.jpg',
            '/blog/blog3/bathroom_view_6.effectsResult.jpg',
            '/blog/blog3/bathroom_view_7.effectsResult.jpg',
            '/blog/blog3/bathroom_view_9.effectsResult.jpg',
        ],
        excerpt: 'The modern bathroom is more than just a functional space; it\'s a tranquil, streamlined sanctuary built on principles of clean lines, high contrast, and uncluttered sophistication.',
        content: {
            introduction: [
                'The modern bathroom is more than just a functional space; it\'s a tranquil, streamlined sanctuary built on principles of clean lines, high contrast, and uncluttered sophistication. Drawing inspiration from sleek, high-impact design, we explore the elements that define this contemporary style.'
            ],
            sections: [
                {
                    title: 'The Style: High Contrast Minimalism',
                    content: [
                        'This aesthetic embraces Modern Minimalism, defined by a dramatic yet controlled use of color, smooth finishes, and an absence of ornamentation. The design focuses on geometry, functionality, and open space, creating a serene, spa-like environment that is both visually striking and incredibly practical.'
                    ]
                },
                {
                    title: 'Color Palette: The Power of Monochrome',
                    content: [
                        'The design is dominated by a powerful monochromatic scheme:'
                    ],
                    subsections: [
                        {
                            title: 'Walls and Vanity',
                            content: [
                                'Bright, crisp white or light gray large-format tiles create a clean, expansive backdrop.'
                            ]
                        },
                        {
                            title: 'Focal Points',
                            content: [
                                'Deep, grounding black is used for the freestanding tub, the vanity, and door frames, providing high-contrast anchor points.'
                            ]
                        },
                        {
                            title: 'Accents',
                            content: [
                                'A striking dark patterned tile is used to define the shower area, adding texture without disrupting the color scheme. Gold/Brass is subtly introduced in the robe rack, offering a touch of warmth and luxury.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Materials and Finishes: Sleek and Seamless',
                    content: [
                        'The material selection prioritizes sleekness, durability, and a continuous flow throughout the space.'
                    ],
                    subsections: [
                        {
                            title: 'Flooring',
                            content: [
                                'A smooth, matte gray or concrete-look finish ties the entire room together, extending into the shower area for a seamless look.'
                            ]
                        },
                        {
                            title: 'Walls',
                            content: [
                                'Large-format rectangular tiles in a light tone minimize grout lines and enhance the room\'s streamlined appearance.'
                            ]
                        },
                        {
                            title: 'Vanity',
                            content: [
                                'The vanity is defined by its glossy black finish and simple, geometric form, often appearing to float to emphasize clean lines and maximize floor space.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Fixtures and Furniture: Bold Geometry',
                    content: [],
                    subsections: [
                        {
                            title: 'The Tub',
                            content: [
                                'A dramatic black freestanding bathtub with clean, sculpted lines is the primary feature, acting as a piece of functional art.'
                            ]
                        },
                        {
                            title: 'Shower',
                            content: [
                                'A frameless glass enclosure ensures an open, airy feel, while the textured black patterned tile creates a strong visual statement in the wet zone.'
                            ]
                        },
                        {
                            title: 'Storage',
                            content: [
                                'The floating vanity provides concealed storage. Open, dark-toned ladder-style shelving offers a minimalist display space for towels or small accessories without adding visual weight.'
                            ]
                        },
                        {
                            title: 'Robe Rack',
                            content: [
                                'A simple, geometric brass or gold-toned rack adds a vertical accent and a functional touch of luxury for bathrobes and towels.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Lighting and Ambiance',
                    content: [
                        'Lighting in a modern bathroom is strategic and atmospheric, used to highlight key features and create depth.'
                    ],
                    subsections: [
                        {
                            title: 'Functional Light',
                            content: [
                                'Recessed pot lights in the ceiling provide general, clean illumination.'
                            ]
                        },
                        {
                            title: 'Accent Light',
                            content: [
                                'Sleek, vertical LED bar sconces flank the artwork or the tub, adding a warm glow and emphasizing the height of the walls.'
                            ]
                        },
                        {
                            title: 'Vanity Lighting',
                            content: [
                                'Unique, architectural fixtures—like the curved linear light over the vanity mirror—provide focused, shadow-free task lighting while contributing an artistic element to the space.'
                            ]
                        }
                    ]
                },
                {
                    title: 'Accessories and Soft Furnishings',
                    content: [
                        'Accessories are sparse, curated, and highly geometric.'
                    ],
                    subsections: [
                        {
                            title: 'Mirror',
                            content: [
                                'An oversized, frameless or simply framed mirror above the vanity reflects light and amplifies the spacious feel.'
                            ]
                        },
                        {
                            title: 'Art',
                            content: [
                                'Large, simple framed artwork featuring abstract or script-like text introduces a personal, intellectual touch without using distracting color or complex imagery.'
                            ]
                        },
                        {
                            title: 'Rug',
                            content: [
                                'A graphic black and white geometric rug adds softness and pattern to the floor, instantly grounding the space and reinforcing the high-contrast aesthetic.'
                            ]
                        }
                    ]
                }
            ],
            conclusion: [
                'The result is a contemporary bathroom design that is sophisticated, highly functional, and dedicated to creating a daily ritual of uncluttered calm.'
            ]
        }
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map(post => post.slug);
}
