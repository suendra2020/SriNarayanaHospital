# Sri Narayana Hospital - Design Brainstorm

## Selected Design Approach: Modern Medical Minimalism

### Design Movement
**Contemporary Healthcare Design** - Clean, professional, and patient-centric with emphasis on trust, accessibility, and modern aesthetics inspired by leading hospital websites (Apollo, Manipal, Aster).

### Core Principles
1. **Trust Through Clarity** - Minimal visual noise, clear information hierarchy, and straightforward navigation to build patient confidence
2. **Accessibility First** - High contrast text, readable typography, intuitive layouts that work seamlessly across all devices
3. **Human-Centered Design** - Warm, approachable color palette with professional imagery that feels welcoming rather than sterile
4. **Modern Simplicity** - Contemporary design without unnecessary ornamentation; every element serves a purpose

### Color Philosophy
- **Primary Blue** (`#0066CC`) - Medical authority, trust, and professionalism
- **Accent Teal** (`#00B4A6`) - Healthcare wellness, growth, and positive energy
- **Soft Green** (`#E8F5F3`) - Healing, health, and calm backgrounds
- **Neutral Gray** (`#F5F7FA`) - Clean backgrounds and subtle dividers
- **Dark Slate** (`#1A2332`) - Primary text for readability and hierarchy
- **Warm Accent** (`#FF6B35`) - Call-to-action buttons for urgency (emergency, appointments)

**Emotional Intent**: Convey professionalism and expertise while maintaining warmth and approachability. The color palette should feel modern, trustworthy, and healthcare-focused without being cold or corporate.

### Layout Paradigm
- **Asymmetric Hero Section** - Diagonal dividers and angled sections to create visual interest while maintaining professionalism
- **Card-Based Services** - Modular service cards with icons, descriptions, and hover effects
- **Staggered Content Blocks** - Alternating left-right layouts for About, Services, and Doctor sections to avoid monotonous grid layouts
- **Hero Carousel** - Full-width image slider with overlaid text for key messaging
- **Sticky Navigation** - Persistent header with quick access to appointment booking and emergency contact

### Signature Elements
1. **Diagonal Section Dividers** - SVG wave/diagonal cuts between sections for visual flow and modern aesthetic
2. **Medical Icons with Circular Backgrounds** - Icons placed in soft-colored circles (blues, teals, greens) for service cards and features
3. **Floating Action Buttons** - Fixed call/WhatsApp buttons in bottom-right corner for easy emergency access

### Interaction Philosophy
- **Smooth Hover Effects** - Cards lift slightly with shadow expansion on hover
- **Subtle Transitions** - All state changes (color, position, opacity) use 300ms ease-in-out transitions
- **Micro-interactions** - Button ripples, icon animations, and counter animations for testimonials
- **Responsive Behavior** - Touch-friendly spacing on mobile, optimized click targets

### Animation Guidelines
- **Page Entrance** - Fade-in with slight upward motion (200ms) for hero section and major sections
- **Scroll Animations** - Elements fade in and slide up as they enter viewport (using Intersection Observer)
- **Carousel Transitions** - Smooth fade/slide transitions between carousel slides (500ms)
- **Button Interactions** - Scale (1.02x) on hover with color transition
- **Counter Animations** - Numbers increment smoothly when testimonials/stats section comes into view

### Typography System
- **Display Font**: `Poppins` (Bold, 600-700 weight) - Headlines, hero text, section titles
- **Body Font**: `Inter` (Regular 400, Medium 500) - Body text, descriptions, labels
- **Hierarchy**:
  - H1: Poppins 700, 48px (desktop), 32px (mobile)
  - H2: Poppins 600, 36px (desktop), 24px (mobile)
  - H3: Poppins 600, 24px (desktop), 18px (mobile)
  - Body: Inter 400, 16px (desktop), 14px (mobile)
  - Small: Inter 400, 14px (desktop), 12px (mobile)

---

## Implementation Notes
- Use Tailwind CSS 4 with custom OKLCH color variables for semantic theming
- Implement responsive design mobile-first approach
- Leverage shadcn/ui components for consistency and accessibility
- Use Embla Carousel for hero carousel with smooth transitions
- Integrate Framer Motion for scroll animations and micro-interactions
- Ensure WCAG AA compliance for accessibility
