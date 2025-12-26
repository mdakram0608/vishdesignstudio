// Component to inject JSON-LD structured data
import Script from 'next/script';

interface StructuredDataScriptProps {
    data: object | object[];
}

export default function StructuredDataScript({ data }: StructuredDataScriptProps) {
    const schemas = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemas.map((schema, index) => (
                <Script
                    key={index}
                    id={`structured-data-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
