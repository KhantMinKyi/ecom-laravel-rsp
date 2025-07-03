import ShopBanner from '@/components/frontend/Shopbanner'
import ShopCategories from '@/components/frontend/Shopcategories'
import ShopFrontLayout from '@/layouts/shop-front-layout'
import React from 'react'

export default function home() {
  return (
    <ShopFrontLayout>
      <div className="min-h-screen">
        <ShopBanner />
        <ShopCategories/>
      </div>
      {/* <h2>Welcome to my Ecommerce</h2> */}
    </ShopFrontLayout>
  )
}
