'use client';

import { IoChevronDown, IoChevronForward } from 'react-icons/io5';
import { useState } from 'react';

const listItems = [
  { title: "Women's Fashion", subItems: ['Clothes', 'Accessories', 'Shoes'] },
  { title: "Men's Fashion", subItems: ['Clothes', 'Accessories', 'Shoes'] },
  { title: 'Electronics' },
  { title: 'Home & Lifestyle' },
  { title: 'Medicine' },
  { title: 'Sports & Outdoor' },
  { title: 'Baby & Toys' },
  { title: 'Groceries & Pets' },
  { title: 'Health & Beauty' },
];

const ProductCategory = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    if (activeDropdown === category) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(category);
    }
  };

  return (
    <>
      <ul className="block space-y-3">
        {listItems.map((item) => (
          <li key={item.title} className="whitespace-nowrap">
            <div
              onClick={() =>
                item.subItems ? toggleDropdown(item.title) : undefined
              }
              onKeyUp={(e) =>
                e.key === 'Enter' && item.subItems && toggleDropdown(item.title)
              }
              onKeyDown={(e) =>
                e.key === ' ' && item.subItems && toggleDropdown(item.title)
              }
              className="flex cursor-pointer items-center justify-between gap-6"
              role="button"
              tabIndex={0}
              aria-expanded={activeDropdown === item.title}
              aria-controls={`${item.title}-submenu`}
            >
              <span>{item.title}</span>
              {item.subItems && (
                <span>
                  {activeDropdown === item.title ? (
                    <IoChevronDown />
                  ) : (
                    <IoChevronForward />
                  )}
                </span>
              )}
            </div>
            {item.subItems && activeDropdown === item.title && (
              <ul
                id={`${item.title}-submenu`}
                className="ml-2 mt-2 space-y-2 text-gray-600"
              >
                {item.subItems.map((subItem) => (
                  <li key={`${item.title}-${subItem}`}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductCategory;
