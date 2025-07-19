# Components Documentation

This directory contains all reusable components for the Medical Billing Expert Witness website.

## Layout Components

### Header
Navigation header with responsive menu and logo.

### Footer
Site footer with links, contact information, and company details.

### Container
Responsive container wrapper with configurable max-width and padding.

## UI Components

### Button
Flexible button component with multiple variants and sizes.
- Variants: `primary`, `secondary`, `outline`
- Sizes: `sm`, `md`, `lg`
- Can be used as link or button

### Card
Base card component with configurable padding, shadow, and hover effects.

### ServiceCard
Specialized card for displaying services with icon, title, description, and features list.

### StatsCard
Component for displaying statistics with large numbers and labels.

### FeatureCard
Card component for features with optional icon, title, and description.

### ExpertCard
Detailed card for displaying expert profiles with certifications, specialties, and bio.

### CTASection
Call-to-action section with title, description, and multiple buttons.

### PageHeader
Consistent page header with title and optional description.

### ContactForm
Complete contact form with validation and submission handling.

### TestimonialCard
Card for displaying client testimonials with ratings and author information.

### ProcessStep
Step component for process flows with connecting lines.

### FAQ
Collapsible FAQ component with multiple items.

### Badge
Small badge component for labels and statuses.

### LoadingSpinner
Loading spinner with configurable sizes.

### Alert
Alert component for various message types (info, success, warning, error).

## Icons

Pre-built icon components for common use cases:
- CheckIcon
- DocumentIcon
- ClipboardIcon
- CalendarIcon
- EmailIcon
- PhoneIcon
- ClockIcon

## Usage

Import components from the index file:

```tsx
import { Button, ServiceCard, ContactForm } from '@/components';

// Or import individual components
import Button from '@/components/Button';
```

## Styling

All components use Tailwind CSS for styling with consistent:
- Color scheme (blue primary, gray neutral)
- Typography scale
- Spacing system
- Shadow and border radius
- Responsive breakpoints