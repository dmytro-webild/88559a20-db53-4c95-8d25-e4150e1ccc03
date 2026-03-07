"use client";

import { Check, Leaf, TrendingUp, Zap, DollarSign } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SNEKI"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Why SNEKI", id: "about" },
            { name: "B2B", id: "b2b" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Become a Reseller",            href: "contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="SNEKI"
          description="Premium fruit snacks. Strong margins. High shelf rotation."
          tag="Natural Fruit Snacks"
          tagAnimation="slide-up"
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/top-view-fruits-as-peach-pear-coconut-banana-cutting-board-with-knife-plaid-cloth-green-background_141793-27999.jpg"
          imageAlt="SNEKI premium fruit snacks collection"
          mediaAnimation="opacity"
          buttons={[
            { text: "Become a Reseller", href: "contact" },
            { text: "Explore Products", href: "products" },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Premium Quality",              handle: "100% Real Fruit Ingredients",              testimonial: "Natural fruits transformed into delicious and practical snacks that preserve flavor and nutrition.",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-businesswoman-with-folded-arms_1262-1775.jpg",              imageAlt: "Premium quality seal"},
            {
              name: "Retail Success",              handle: "High Shelf Rotation",              testimonial: "Strong consumer demand and excellent retail margins make SNEKI the perfect product for your store.",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              imageAlt: "Retail success metric"},
            {
              name: "Convenient Packaging",              handle: "Easy to Stock & Display",              testimonial: "Attractive packaging and straightforward logistics ensure seamless integration into your retail environment.",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Convenient packaging"},
          ]}
          testimonialRotationInterval={5000}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why SNEKI?"
          description="SNEKI was created to transform natural fruits into practical snacks for everyday life. Our products preserve the flavor, texture and nutrients of real fruit while offering a convenient and healthy snack alternative. Whether for personal consumption or retail resale, SNEKI delivers high-quality products with strong consumer appeal and excellent shelf rotation."
          tag="Our Story"
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "100% Fruit Based",              description: "Real fruit ingredients, nothing artificial. Pure natural snacking goodness in every bite.",              icon: Leaf,
            },
            {
              title: "No Artificial Preservatives",              description: "Clean ingredient list you can trust. Naturally preserved through dehydration process.",              icon: Check,
            },
            {
              title: "Convenient Everyday Snack",              description: "Perfect for busy lifestyles. Grab-and-go packaging for work, gym, or home.",              icon: Zap,
            },
            {
              title: "High Retail Sell-Through",              description: "Proven consumer demand and repeat purchases ensure strong shelf performance.",              icon: TrendingUp,
            },
            {
              title: "Strong Margins",              description: "Excellent profit opportunity for retailers. Competitive wholesale pricing with premium positioning enables healthy markup and strong bottom-line growth.",              icon: DollarSign,
            },
          ]}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/front-view-stand-with-nuts-different-along-with-dried-fruits-dark-floor_140725-14502.jpg?_wi=1"
          imageAlt="SNEKI mixed fruit chips premium packaging"
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Product Line"
          description="Premium natural fruit snacks with authentic taste and convenient packaging. Perfect for retail shelves."
          tag="Featured Products"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Freeze-Dried Mixed Fruit Chips",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-stand-with-nuts-different-along-with-dried-fruits-dark-floor_140725-14502.jpg?_wi=2",              imageAlt: "Colorful freeze-dried mixed fruit chips"},
            {
              id: "2",              name: "Banana Chips",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/banana-healthy-breakfast-organic-pasta-plate_23-2148440306.jpg?_wi=1",              imageAlt: "Crispy natural banana chips"},
            {
              id: "3",              name: "Strawberry Chips",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-country-woman-with-strawberry-white_176420-4922.jpg?_wi=1",              imageAlt: "Freeze-dried strawberry fruit chips"},
            {
              id: "4",              name: "Dehydrated Apple",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/small-heap-dried-apple-slices-with-whole-apple-sitting-top-white-background_114579-24023.jpg?_wi=1",              imageAlt: "Naturally dried apple slices"},
            {
              id: "5",              name: "Dehydrated Mango",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/half-shot-delicious-snacks-parties-left-side-dark-background_140725-94541.jpg",              imageAlt: "Soft tropical mango strips"},
            {
              id: "6",              name: "Dehydrated Strawberry",              price: "Request Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-ceramic-plate-full-fresh-sweet-organic-strawberries-picked-garden-sunlight-window-shade-kitchen-table_132075-8890.jpg",              imageAlt: "Naturally dried strawberry slices"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="auto"
          buttons={[{ text: "Become a Reseller", href: "contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="b2b" data-section="b2b">
        <FeatureCardTwentyThree
          title="Sell SNEKI in Your Store"
          description="SNEKI products are designed to perform strongly in retail environments. They are ideal for convenience stores, gyms, coffee shops, natural food retailers, and more."
          tag="B2B Opportunity"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "High Consumer Demand",              tags: ["Premium Positioning", "Strong Sales"],
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-stand-with-nuts-different-along-with-dried-fruits-dark-floor_140725-14502.jpg?_wi=3"},
            {
              id: "2",              title: "Excellent Retail Margins",              tags: ["Profitability", "Competitive Advantage"],
              imageSrc: "http://img.b2bpic.net/free-photo/banana-healthy-breakfast-organic-pasta-plate_23-2148440306.jpg?_wi=2"},
            {
              id: "3",              title: "Attractive Packaging",              tags: ["Eye-Catching Design", "Shelf Appeal"],
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-country-woman-with-strawberry-white_176420-4922.jpg?_wi=2"},
            {
              id: "4",              title: "Easy Logistics",              tags: ["Simple Placement", "Quick Setup"],
              imageSrc: "http://img.b2bpic.net/free-photo/small-heap-dried-apple-slices-with-whole-apple-sitting-top-white-background_114579-24023.jpg?_wi=2"},
          ]}
          animationType="slide-up"
          buttons={[{ text: "Become a SNEKI Partner", href: "contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="differentiators" data-section="differentiators">
        <MetricCardTwo
          title="What Makes SNEKI Different"
          description="Key differentiators that set SNEKI apart in the natural snacks market."
          tag="Our Advantages"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "1", value: "100%", description: "Real Fruit Ingredients" },
            { id: "2", value: "Zero", description: "Artificial Preservatives" },
            { id: "3", value: "Premium", description: "Yet Accessible Pricing" },
            { id: "4", value: "Proven", description: "High Retail Rotation" },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="partnership" data-section="partnership">
        <ContactCTA
          tag="Partnership Process"
          title="How to Become a SNEKI Reseller"
          description="Simple 3-step process to start selling premium Brazilian fruit snacks. Submit your information, our team will contact you with commercial terms and support materials."
          buttons={[
            { text: "Start Partnership", href: "contact" },
            { text: "Learn More", href: "b2b" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Become a SNEKI Partner?"
          description="Contact our B2B team to discuss wholesale opportunities, pricing, and support. We're here to help you grow your business with SNEKI premium fruit snacks."
          buttons={[
            { text: "Contact SNEKI", href: "#contact-form" },
            { text: "View Catalog", href: "products" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SNEKI"
          copyrightText="© 2025 SNEKI | Naturally Practical"
          columns={[
            {
              title: "Products",              items: [
                { label: "Fruit Chips", href: "products" },
                { label: "Dehydrated Fruits", href: "products" },
                { label: "Product Catalog", href: "products" },
              ],
            },
            {
              title: "B2B",              items: [
                { label: "Become a Reseller", href: "b2b" },
                { label: "Partnership Terms", href: "b2b" },
                { label: "Wholesale Pricing", href: "contact" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About SNEKI", href: "about" },
                { label: "Contact Us", href: "contact" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}