// Define types for competitive sites data
interface CompetitiveSite {
  siteName: string;
  iconName: IconType;
  style: {
    color: string;
  };
  profileLink: string;
}

interface CompetitiveSitesData {
  competitiveSites: CompetitiveSite[];
}

export { CompetitiveSite, CompetitiveSitesData };
