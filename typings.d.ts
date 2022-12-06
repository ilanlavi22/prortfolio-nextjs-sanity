interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePicture: Image;
  phoneNumber: string;
  email: string;
  address: string;
  //socials: Social[];
}

export interface Technology extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
  //technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: 'project';
  name: string;
  image: Image;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: date;
  dateEnd: date;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  points: string[];
}
