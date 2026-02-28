export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  treatment: string;
}

export interface BeforeAfter {
  id: string;
  title: string;
  before: string;
  after: string;
}
