# How to Use Product Icons

## Import the ProductIcon component

```typescript
import ProductIcon from '@/components/ProductIcon';

// Usage in JSX
<ProductIcon name="smartphone" size={32} className="text-primary" />
<ProductIcon name="laptop" size={24} className="text-blue-500" />
<ProductIcon name="headphones" size={20} className="text-gray-600" />
```

## Available Product Icons

### Electronics
- `smartphone` - Mobile phones
- `laptop` - Laptop computers  
- `laptop-alt` - Alternative laptop design
- `tablet` - Tablet devices
- `desktop` - Desktop computers
- `monitor` - Computer monitors
- `camera` - Digital cameras
- `projector` - Projectors

### Audio
- `headphones` - Over-ear headphones
- `earbuds` - Wireless earbuds
- `speaker` - Speakers
- `microphone` - Microphones
- `audio-system` - Audio systems
- `media-player` - Media players

### Accessories
- `mouse` - Computer mouse
- `keyboard` - Keyboards
- `watch` - Smartwatches
- `phone-case` - Phone cases
- `cable` - Cables and connectors
- `usb` - USB devices
- `wireless` - Wireless devices
- `power-bank` - Portable batteries

### Networking & Storage
- `router` - Network routers
- `storage` - Storage devices

### Categories
- `electronics` - Electronics category
- `accessories` - Accessories category
- `gadgets` - Gadgets category
- `gaming` - Gaming category

## Styling

Icons inherit the current text color and can be styled with CSS:

```css
.icon-primary {
  color: #00e0d3;
}

.icon-large {
  width: 48px;
  height: 48px;
}
```
