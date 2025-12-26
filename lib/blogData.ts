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
            'A tufted upholstered headboard forms a soft, elegant focal point.'
        ]
    },
    {
        title: 'Nightstands',
        content: [
            'Carved nightstands add classic detail and function.'
        ]
    },
    {
        title: 'Seating',
        content: [
            'An accent chair or chaise offers comfort and balance.'
        ]
    },
    {
        title: 'Wardrobe',
        content: [
            'Integrated wardrobes provide discreet, refined storage.'
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
    title: 'Color Palette: Monochrome Impact',
    content: [
        'A bold black-and-white palette defines the space.'
    ],
    subsections: [
        {
            title: 'Walls & Vanity',
            content: [
                'Light-toned tiles create a bright, expansive base.'
            ]
        },
        {
            title: 'Focal Points',
            content: [
                'Black elements anchor the space with contrast.'
            ]
        },
        {
            title: 'Accents',
            content: [
                'Patterned tile and subtle brass add texture and warmth.'
            ]
        }
    ]
},
{
    title: 'Materials & Finishes',
    content: [
        'Sleek materials ensure continuity and durability.'
    ],
    subsections: [
        {
            title: 'Flooring',
            content: [
                'Matte gray flooring flows seamlessly into the shower.'
            ]
        },
        {
            title: 'Walls',
            content: [
                'Large-format tiles enhance the streamlined look.'
            ]
        },
        {
            title: 'Vanity',
            content: [
                'A floating black vanity emphasizes clean geometry.'
            ]
        }
    ]
},
{
    title: 'Fixtures & Furniture',
    content: [],
    subsections: [
        {
            title: 'Tub',
            content: [
                'A sculptural black freestanding tub acts as the centerpiece.'
            ]
        },
        {
            title: 'Shower',
            content: [
                'Frameless glass keeps the space open and minimal.'
            ]
        },
        {
            title: 'Storage',
            content: [
                'Floating storage maintains a light, uncluttered feel.'
            ]
        },
        {
            title: 'Robe Rack',
            content: [
                'A brass rack adds a refined functional accent.'
            ]
        }
    ]
},
{
    title: 'Lighting & Ambiance',
    content: [
        'Lighting is layered for clarity and mood.'
    ],
    subsections: [
        {
            title: 'General',
            content: [
                'Recessed lighting provides clean illumination.'
            ]
        },
        {
            title: 'Accent',
            content: [
                'Vertical LED lights highlight key elements.'
            ]
        },
        {
            title: 'Vanity',
            content: [
                'Architectural fixtures deliver focused task lighting.'
            ]
        }
    ]
},
{
    title: 'Accessories & Soft Furnishings',
    content: [
        'Accessories are minimal and intentional.'
    ],
    subsections: [
        {
            title: 'Mirror',
            content: [
                'A large mirror enhances light and scale.'
            ]
        },
        {
            title: 'Art',
            content: [
                'Simple artwork adds personality without clutter.'
            ]
        },
        {
            title: 'Rug',
            content: [
                'A graphic rug softens the space and grounds the design.'
            ]
        }
    ]
}

            ],
            conclusion: [
                'The result is a contemporary bathroom design that is sophisticated, highly functional, and dedicated to creating a daily ritual of uncluttered calm.'
            ]
        }
    },
    {
        slug: 'dark-luxury-retreat-guest-bedroom',
        title: 'Dark Luxury Guest Suite',
        subtitle: 'Contemporary glamour, high-contrast palettes, and rich textures for an unforgettable guest retreat',
        date: '2025-12-11',
        category: 'Bedroom Design',
        featuredImage: '/blog/blog4/Blog4_1.jpeg',
        images: [
            '/blog/blog4/Blog4_2.jpeg',
            '/blog/blog4/Blog4_3.jpeg',
            '/blog/blog4/Blog4_4.jpeg',
            '/blog/blog4/Blog4_5.jpeg',
            '/blog/blog4/Blog4_6.jpeg'
        ],
        excerpt:
            'A dramatic modern guest bedroom built on high contrast, rich textures, and contemporary luxury — blending boutique-hotel glamour with residential comfort.',
        content: {
            introduction: [
                "Forget the standard light and airy guest room. This design showcases a sophisticated, modern aesthetic built on dramatic contrast, rich textures, and contemporary luxury. It creates a bold, unforgettable retreat for any guest, blending boutique hotel glamour with residential comfort."
            ],
            sections: [
                {
                    title: 'The Style: Contemporary Glamour & High Contrast',
                    content: [
                        'This style is defined by its deep, moody palette and clean, modern architectural lines. It combines the structured formality of classical detailing (like paneling) with the soft indulgence of contemporary furnishings.'
                    ],
                    subsections: [
                        {
                            title: 'Color Palette',
                            content: [
                                'The foundation is a sophisticated high-contrast scheme: deep charcoals, slate grays, and near-blacks dominate walls and furniture, while crisp white architectural elements and light gray textiles provide sharp, elegant breaks.'
                            ]
                        },
                        {
                            title: 'Materials & Walls',
                            content: [
                                'Walls feature vertical paneled details in dark tones, sometimes with subtle wood grain or textured wallpaper insets to add architectural weight and texture. Mirrored wardrobe panels and selective reflective finishes enhance perceived depth and light.'
                            ]
                        }
                    ]
                },

                {
                    title: 'Furniture and Soft Furnishings',
                    content: ['The furniture is low-profile and sleek, allowing architectural details to lead the eye.'],
                    subsections: [
                        {
                            title: 'The Bed',
                            content: [
                                'A low, upholstered bed frame in a deep tone anchors the room. Bedding is minimal and layered in cool grays and white to create an inviting, chic composition.'
                            ]
                        },
                        {
                            title: 'Accent Furniture',
                            content: [
                                'Sleek modern pieces — dark console tables with metallic frames, minimalist glass or mirrored side tables — keep the look high-end and uncluttered.'
                            ]
                        },
                        {
                            title: 'The Fireplace',
                            content: [
                                'A compact mantel in dark marble or stone introduces a classic element that reads modern within the palette, offering a focal point for warmth and texture.'
                            ]
                        }
                    ]
                },

                {
                    title: 'Light, Flooring, and Window Treatments',
                    content: ['These elements balance the deep colors and maximise the luxurious effect.'],
                    subsections: [
                        {
                            title: 'Lighting',
                            content: [
                                'A large sculptural chandelier (clear or frosted glass) provides sparkle and contrast against the dark scheme. Recessed ceiling lights and crystal wall sconces deliver functional and accent illumination.'
                            ]
                        },
                        {
                            title: 'Window Treatments',
                            content: [
                                'Layered drapery: an inner sheer dark panel for a smoky effect and an outer heavy light-gray or white drape for blackout and softness.'
                            ]
                        },
                        {
                            title: 'Flooring',
                            content: [
                                'A light-gray textured area rug adds warmth and a soft visual break from dark walls, grounding the furniture and improving acoustics.'
                            ]
                        }
                    ]
                },

                {
                    title: 'Accessories and Detail',
                    content: ['Accessories are intentionally minimal and impactful, favouring glass, metal, and natural elements.'],
                    subsections: [
                        {
                            title: 'Mirrors',
                            content: [
                                'Tall vertical mirrors integrated into paneling or wardrobe doors expand perceived space and reflect light to counterbalance the dark palette.'
                            ]
                        },
                        {
                            title: 'Vases & Botanicals',
                            content: [
                                'Simple vases with natural branches or white flowers introduce an organic, delicate contrast to the room’s strong architectural lines.'
                            ]
                        }
                    ]
                }
            ],
            conclusion: [
                'This design demonstrates that luxury does not always require bright gold and cream; it can be achieved through subtle texture, dramatic contrast, and precise execution of a sophisticated modern palette.'
            ]
        }
    },
    {
        slug: 'modern-master-bathroom-retreat',
        title: 'Monochrome Master Bath Retreat',
        subtitle: 'A sculptural, high-contrast approach to create a luxurious, spa-like master bathroom',
        date: '2025-12-11',
        category: 'Bathroom Design',
        featuredImage: '/blog/blog5/Blog5_1.jpg',
        images: [
            '/blog/blog5/Blog5_1.jpg',
            '/blog/blog5/Blog5_2.jpg',
            '/blog/blog5/Blog5_3.jpg'
        ],
        excerpt:
            'A modern master bathroom that merges High-Contrast Minimalism with Sculptural Spa forms — clean geometry, premium materials, and layered lighting for a serene, luxury retreat.',
        content: {
            introduction: [
                'The modern bathroom is elevated from a functional space to a luxurious, spa-like escape. This design showcases two complementary contemporary styles: the sleek High-Contrast Minimalist approach and the Sculptural Spa aesthetic, unified by an uncompromising commitment to clean lines and high-end materials.'
            ],
            sections: [
                {
    title: 'Style and Color Palette',
    content: [
        'The design follows a modern minimalist philosophy with an architectural focus, balancing crisp geometry with soft, sculptural elements.'
    ],
    subsections: [
        {
            title: 'High Contrast',
            content: [
                'Light walls and ceilings enhance space and brightness, while matte black fixtures and features create deliberate contrast and strong visual anchors.'
            ]
        },
        {
            title: 'Sculptural Form',
            content: [
                'Organic, sculptural elements—such as oval stone tubs and curved forms—soften the minimal geometry and add a spa-like sense of luxury.'
            ]
        }
    ]
},
{
    title: 'Materials, Flooring, and Walls',
    content: [
        'Materials are selected for seamless continuity, durability, and subtle textural impact within a restrained palette.'
    ],
    subsections: [
        {
            title: 'Seamless Finishes',
            content: [
                'Large-format light tiles minimize grout lines and create a clean, continuous wall surface.'
            ]
        },
        {
            title: 'Flooring',
            content: [
                'Matte grey or concrete-look flooring provides a unified, durable base that extends naturally into wet areas.'
            ]
        },
        {
            title: 'Textural Impact',
            content: [
                'A dark geometric shower feature tile adds depth and interest, while frameless glass maintains an open, airy feel.'
            ]
        }
    ]
},
{
    title: 'Fixtures and Furniture',
    content: [
        'Fixtures and furnishings remain minimal, sculptural, and materially expressive.'
    ],
    subsections: [
        {
            title: 'Vanity',
            content: [
                'A floating black vanity reinforces clean geometry and enhances spatial openness.'
            ]
        },
        {
            title: 'Tubs',
            content: [
                'Freestanding black or stone soaking tubs provide both visual drama and spa-like comfort.'
            ]
        },
        {
            title: 'Storage',
            content: [
                'Concealed cabinetry and minimal open shelving balance practicality with visual clarity.'
            ]
        }
    ]
}  

            ],
            conclusion: [
                'This modern master bathroom demonstrates how precise execution—through high-contrast materials, seamless surfaces, sculptural forms, and layered lighting—creates a refined, spa-like retreat. The result is a space that is both functional and deeply restorative, where minimalism and materiality combine to deliver quiet luxury.'
            ]
        }
    },
    {
        slug: 'jewel-box-powder-bathroom',
        title: 'Modern Jewel Box Powder Room',
        subtitle: 'Transforming a compact guest bath into a textural, high-impact jewel box',
        date: '2025-12-11',
        category: 'Powder Room',
        featuredImage: '/blog/blog6/Blog6_1.jpg',
        images: [
            '/blog/blog6/Blog6_2.jpg',
            '/blog/blog6/Blog6_3.jpg',
            '/blog/blog6/Blog6_4.jpg',
            '/blog/blog6/Blog6_5.jpg',
            '/blog/blog6/Blog6_6.jpg'
        ],
        excerpt:
            'A compact powder bathroom reimagined as a sophisticated jewel box — rich textures, focused lighting, and carefully chosen materials create an intimate, unforgettable guest experience.',
        content: {
            introduction: [
                "The powder bathroom, or guest bath, is the perfect space to make a bold, unforgettable statement. Moving away from the typical white box, this design transforms the compact space into a sophisticated, textural jewel box, using dramatic materials and focused lighting to create immediate impact."
            ],
            sections: [
                {
    title: 'Style and Palette: Intimate Sophistication',
    content: [
        'A contemporary glamour aesthetic defined by texture, muted greys, and refined contrast.'
    ],
    subsections: [
        {
            title: 'Style',
            content: [
                'Contemporary glamour softened through layered textures and elegant restraint.'
            ]
        },
        {
            title: 'Color',
            content: [
                'Greys and charcoals are balanced by a crisp white marble accent.'
            ]
        }
    ]
},
{
    title: 'Materials and Surfaces',
    content: [
        'Texture-driven surfaces create depth within a compact footprint.'
    ],
    subsections: [
        {
            title: 'Walls',
            content: [
                'Textured light-grey walls paired with a darker vanity feature surface.'
            ]
        },
        {
            title: 'Vanity Countertop',
            content: [
                'White marble with bold veining provides a timeless focal contrast.'
            ]
        },
        {
            title: 'Flooring',
            content: [
                'Light, minimal flooring keeps the base visually quiet.'
            ]
        }
    ]
},
{
    title: 'Fixtures and Furniture',
    content: [
        'Scaled furnishings blend transitional warmth with modern clarity.'
    ],
    subsections: [
        {
            title: 'Vanity',
            content: [
                'A furniture-style vanity adds softness and character.'
            ]
        },
        {
            title: 'Mirror',
            content: [
                'An arched mirror softens geometry and anchors the vanity.'
            ]
        },
        {
            title: 'Storage',
            content: [
                'Minimal shelving supports curated, clutter-free styling.'
            ]
        }
    ]
},
{
    title: 'Lighting and Accessories',
    content: [
        'Layered lighting and selective accessories enhance intimacy.'
    ],
    subsections: [
        {
            title: 'Task Lighting',
            content: [
                'Wall sconces provide soft, flattering illumination.'
            ]
        },
        {
            title: 'Ambient Lighting',
            content: [
                'Recessed lights deliver subtle overall brightness.'
            ]
        },
        {
            title: 'Accessories',
            items: [
                'Fresh florals or a single sculptural object.',
                'High-quality towels and a simple tray.'
            ]
        },
        {
            title: 'Window Treatment',
            content: [
                'A neutral roller blind maintains privacy discreetly.'
            ]
        }
    ]
},
{
    title: 'Design Principles for Impact',
    content: [
        'In small spaces, texture, focus, and restraint define impact.'
    ],
    subsections: [
        {
            title: 'Key Moves',
            items: [
                'Prioritise vertical texture.',
                'Anchor the room with a marble vanity.',
                'Frame the vanity with mirror and light.',
                'Keep flooring light and minimal.'
            ]
        }
    ]
}

            ],
            conclusion: [
                'This design turns a small, functional space into a beautiful, sophisticated sanctuary that leaves a lasting impression. By combining textured surfaces, refined materials, and focused lighting, the powder bathroom becomes a compact jewel box — intimate, memorable, and entirely intentional.'
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
