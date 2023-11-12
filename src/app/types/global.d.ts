interface Database {
  public: {
    Tables: {
      contact_info: {
        Row: {
          id: number;
          profile: string;
          contact: string;
          contact_address?: string;
          contact_link?: string;
        };
      };
      projectDetail: {
        Row: {
          Skill: string;
          Responsibilities: string;
          result?: string;
          start_date: string;
          name: string;
          id: number;
          url?: string;
        };
      };
      projectlist: {
        Row: {
          id: number;
          title: string;
          imageUrl: string;
          content: string;
        };
      };
      skillInfo: {
        Row: {
          id: number;
          name: string;
          percentage: number;
          color: string;
        };
      };
    };
  };
}
