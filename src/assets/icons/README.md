# SVG Icons Collection

This folder contains open source SVG icons for the e-commerce platform.

## Sources

- **Feather Icons**: Most icons are sourced from [Feather Icons](https://feathericons.com/) - Beautiful open source icons
- **Custom Icons**: Some icons are custom-created following the same design principles

## Products Icons (`/products/`)

- `smartphone.svg` - Mobile phone icon
- `laptop.svg` - Laptop computer icon
- `laptop-alt.svg` - Alternative laptop design
- `headphones.svg` - Headphones icon
- `watch.svg` - Smartwatch icon
- `camera.svg` - Camera icon
- `speaker.svg` - Speaker icon
- `mouse.svg` - Computer mouse icon
- `monitor.svg` - Computer monitor icon
- `tablet.svg` - Tablet device icon
- `keyboard.svg` - Keyboard icon
- `power-bank.svg` - Portable battery icon
- `wireless.svg` - WiFi/wireless icon
- `usb.svg` - USB connector icon
- `cable.svg` - Cable/connection icon
- `phone-case.svg` - Phone protection case icon
- `earbuds.svg` - Wireless earbuds icon
- `desktop.svg` - Desktop computer icon
- `phone.svg` - Alternative phone icon
- `projector.svg` - Projector device icon
- `microphone.svg` - Microphone icon
- `router.svg` - Network router icon
- `storage.svg` - Storage device icon
- `audio-system.svg` - Audio system icon
- `media-player.svg` - Media player icon

## Category Icons (`/categories/`)

- `electronics.svg` - Electronics category (CPU icon)
- `accessories.svg` - Accessories category (briefcase icon)
- `gadgets.svg` - Gadgets category (settings icon)
- `gaming.svg` - Gaming category (gamepad icon)

## Usage

Import icons in your React components:

```typescript
import { SmartphoneIcon, LaptopIcon, HeadphonesIcon } from '@/assets/icons';

// Or import specific icon
import SmartphoneIcon from '@/assets/icons/products/smartphone.svg';
```

## License

- Feather Icons: MIT License
- Custom Icons: Open source, free to use

## Styling

All icons use `currentColor` for stroke/fill, making them easily customizable with CSS:

```css
.icon {
  color: #00e0d3; /* Changes icon color */
  width: 24px;
  height: 24px;
}
```
