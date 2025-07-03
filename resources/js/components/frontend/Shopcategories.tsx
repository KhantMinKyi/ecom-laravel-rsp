"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Monitor,
  Home,
  Smartphone,
  Gift,
  TrendingUp,
  Star,
  Package,
  Tv,
  Zap,
  ShoppingBag,
  Globe,
  DollarSign,
  Award,
  Search,
  ArrowRight,
} from "lucide-react";
import { Link } from "@inertiajs/react";

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  // icon: React.ReactNode;
  // description: string;
  featured?: boolean;
  isNew?: boolean;
  discount?: string;
  itemCount?: number;
  image: string;
}

export default function ShopCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Premium categories data with descriptions and item counts
  // const categories: CategoryItem[] = [
  //   {
  //     id: 1,
  //     name: "3D Illustrations",
  //     slug: "3d-illustrations",
  //     icon: <Gift className="w-10 h-10 text-blue-500" />,
  //     description: "High-quality 3D graphic assets and illustrations",
  //     itemCount: 1248,
  //     isNew: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Illustration Constructors",
  //     slug: "illustration-constructors",
  //     icon: <Package className="w-10 h-10 text-gray-600" />,
  //     description: "Customizable illustration building tools and elements",
  //     itemCount: 865,
  //   },
  //   {
  //     id: 3,
  //     name: "Vector Illustrations",
  //     slug: "vector-illustrations",
  //     icon: <Star className="w-10 h-10 text-yellow-500" />,
  //     description: "Scalable vector graphics and design elements",
  //     itemCount: 1573,
  //   },
  //   {
  //     id: 4,
  //     name: "Mockups",
  //     slug: "mockups",
  //     icon: <Monitor className="w-10 h-10 text-purple-500" />,
  //     description: "Product templates and presentation mockups",
  //     itemCount: 932,
  //     discount: "SALE",
  //   },
  //   {
  //     id: 5,
  //     name: "Coded Templates",
  //     slug: "coded-templates",
  //     icon: <Zap className="w-10 h-10 text-green-500" />,
  //     description: "Ready-to-use code templates and frameworks",
  //     itemCount: 421,
  //   },
  //   {
  //     id: 6,
  //     name: "Web UI Kits",
  //     slug: "web-ui-kits",
  //     icon: <Globe className="w-10 h-10 text-blue-600" />,
  //     description: "Complete user interface component libraries",
  //     itemCount: 783,
  //   },
  //   {
  //     id: 7,
  //     name: "Icons",
  //     slug: "icons",
  //     icon: <ShoppingBag className="w-10 h-10 text-red-500" />,
  //     description: "Icon sets and symbol libraries for digital projects",
  //     itemCount: 2451,
  //     featured: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Fonts",
  //     slug: "fonts",
  //     icon: <Award className="w-10 h-10 text-amber-500" />,
  //     description: "Premium typefaces and typography collections",
  //     itemCount: 967,
  //   },
  // ];
  const categories: CategoryItem[] = [
    {
      id: 1,
      name: "Beauty & Fragrance",
      slug: "beauty-fragrance",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      image:
        "https://images.unsplash.com/photo-166202691159-5558e9949346?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Health & Personal",
      slug: "health-personal",
      image:
        "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Men's Fashion",
      slug: "mens-fashion",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      name: "Sports & Outdoors",
      slug: "sports-outdoors",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 6,
      name: "Women's Fashion",
      slug: "womens-fashion",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 7,
      name: "Automotive",
      slug: "automotive",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 8,
      name: "Health & Nutrition",
      slug: "health-nutrition",
      image:
        "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 9,
      name: "Kids Fashion",
      slug: "kids-fashion",
      image:
        "https://images.unsplash.com/photo-1543854608-fbb5c5c8a307?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 10,
      name: "Refurbished Department",
      slug: "refurbished",
      image:
        "https://images.unsplash.com/photo-1603706585128-8d096bea0021?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 11,
      name: "Stationary, Books & Media",
      slug: "stationary-books-media",
      image:
        "https://images.unsplash.com/photo-1599204606395-ede983886ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 12,
      name: "Baby",
      slug: "baby",
      image:
        "https://images.unsplash.com/photo-1586683086816-c674f6bb3c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];
  return (
    <>
      {/* Hero Section with Clean Design */}
      <div className="w-full bg-white relative overflow-hidden dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900  dark:text-gray-50 mb-6">
            Everything  <span className="text-green-600">You Need</span> ,
              <br />
              One  <span className="text-green-600">
              Click 
              </span>{" "}
              Away.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            "Delivering Happiness to Your Doorstep."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="/pro-access"
                className="bg-black hover:bg-gray-900 text-white  font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Buy Now
              </Link>
              <Link
                href={route('register')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-full transition-all"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section with Premium Design */}
      <div className="w-full py-16 px-4 md:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-12 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-green-400">
                  Top categories
                </h2>
                <p className="text-gray-500 mt-2">
                  Browse our premium collection of design resources
                </p>
              </div>
              <a
                href="/categories"
                className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors group"
              >
                See all
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Premium Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <a
                key={category.id}
                href={`/category/${category.slug}`}
                className="group flex items-center p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 dark:bg-gray-700 dark:border-gray-700"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transition: "all 0.7s ease",
                  transitionDelay: `${idx * 0.05}s`,
                }}
              >
                {/* Icon in circle with subtle gradient background */}
                <div className="flex-shrink-0">
                  <img className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors  dark:bg-gray-800" src= {category.image} alt={category.name} />
                </div>

                {/* Content with flex-grow */}
                <div className="ml-5 flex-grow">
                  <div className="flex items-center">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-950">
                      {category.name}
                    </h3>
                    {/* {category.isNew && (
                      <span className="ml-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )} */}
                    {/* {category.discount && (
                      <span className="ml-2 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                        {category.discount}
                      </span>
                    )} */}
                  </div>

                  {/* <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p> */}

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400 dark:text-gray-950">
                      {category.itemCount} items
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transform group-hover:translate-x-1 transition-all dark:text-gray-50" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile "View All" button */}
          <div className="mt-10 flex justify-center md:hidden">
            <a
              href="/categories"
              className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-800 transition-colors"
            >
              See all categories
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
