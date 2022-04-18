export interface Planet {
    name: string;
    theme: string;
    overview: {
      content: string;
      source: string
    };
    structure: {
      content: string;
      source: string
    };
    geology: {
      content: string;
      source: string
    };
    rotation: string;
    radius: string;
    revolution: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string
    }
}