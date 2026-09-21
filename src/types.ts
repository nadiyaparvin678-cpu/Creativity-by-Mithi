export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'cakes' | 'crafts' | 'carving';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  tagColor: string;
  highlight?: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  service: string;
  eventDate?: string;
  deliveryArea?: string;
  cakeFlavor?: string;
  cakeWeight?: string;
  notes: string;
}
