import React from 'react';

// Import all SVG icons
import SmartphoneIcon from '@/assets/icons/products/smartphone.svg';
import LaptopIcon from '@/assets/icons/products/laptop.svg';
import LaptopAltIcon from '@/assets/icons/products/laptop-alt.svg';
import HeadphonesIcon from '@/assets/icons/products/headphones.svg';
import WatchIcon from '@/assets/icons/products/watch.svg';
import CameraIcon from '@/assets/icons/products/camera.svg';
import SpeakerIcon from '@/assets/icons/products/speaker.svg';
import MouseIcon from '@/assets/icons/products/mouse.svg';
import MonitorIcon from '@/assets/icons/products/monitor.svg';
import TabletIcon from '@/assets/icons/products/tablet.svg';
import KeyboardIcon from '@/assets/icons/products/keyboard.svg';
import PowerBankIcon from '@/assets/icons/products/power-bank.svg';
import WirelessIcon from '@/assets/icons/products/wireless.svg';
import UsbIcon from '@/assets/icons/products/usb.svg';
import CableIcon from '@/assets/icons/products/cable.svg';
import PhoneCaseIcon from '@/assets/icons/products/phone-case.svg';
import EarbudsIcon from '@/assets/icons/products/earbuds.svg';
import DesktopIcon from '@/assets/icons/products/desktop.svg';
import PhoneIcon from '@/assets/icons/products/phone.svg';
import ProjectorIcon from '@/assets/icons/products/projector.svg';
import MicrophoneIcon from '@/assets/icons/products/microphone.svg';
import RouterIcon from '@/assets/icons/products/router.svg';
import StorageIcon from '@/assets/icons/products/storage.svg';
import AudioSystemIcon from '@/assets/icons/products/audio-system.svg';
import MediaPlayerIcon from '@/assets/icons/products/media-player.svg';

// Category icons
import ElectronicsIcon from '@/assets/icons/categories/electronics.svg';
import AccessoriesIcon from '@/assets/icons/categories/accessories.svg';
import GadgetsIcon from '@/assets/icons/categories/gadgets.svg';
import GamingIcon from '@/assets/icons/categories/gaming.svg';

export type IconName = 
  | 'smartphone' | 'laptop' | 'laptop-alt' | 'headphones' | 'watch' 
  | 'camera' | 'speaker' | 'mouse' | 'monitor' | 'tablet' 
  | 'keyboard' | 'power-bank' | 'wireless' | 'usb' | 'cable' 
  | 'phone-case' | 'earbuds' | 'desktop' | 'phone' | 'projector'
  | 'microphone' | 'router' | 'storage' | 'audio-system' | 'media-player'
  | 'electronics' | 'accessories' | 'gadgets' | 'gaming';

interface ProductIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const iconMap = {
  // Products
  smartphone: SmartphoneIcon,
  laptop: LaptopIcon,
  'laptop-alt': LaptopAltIcon,
  headphones: HeadphonesIcon,
  watch: WatchIcon,
  camera: CameraIcon,
  speaker: SpeakerIcon,
  mouse: MouseIcon,
  monitor: MonitorIcon,
  tablet: TabletIcon,
  keyboard: KeyboardIcon,
  'power-bank': PowerBankIcon,
  wireless: WirelessIcon,
  usb: UsbIcon,
  cable: CableIcon,
  'phone-case': PhoneCaseIcon,
  earbuds: EarbudsIcon,
  desktop: DesktopIcon,
  phone: PhoneIcon,
  projector: ProjectorIcon,
  microphone: MicrophoneIcon,
  router: RouterIcon,
  storage: StorageIcon,
  'audio-system': AudioSystemIcon,
  'media-player': MediaPlayerIcon,
  
  // Categories
  electronics: ElectronicsIcon,
  accessories: AccessoriesIcon,
  gadgets: GadgetsIcon,
  gaming: GamingIcon,
};

const ProductIcon: React.FC<ProductIconProps> = ({ 
  name, 
  className = '', 
  size = 24 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <IconComponent 
      className={className}
      width={size}
      height={size}
    />
  );
};

export default ProductIcon;
export { iconMap };
