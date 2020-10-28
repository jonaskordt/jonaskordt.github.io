interface CVEntryData {
  heading: string;
  organization: string;
  start: Date;
  end?: Date;
  details?: string[];
  organizationLink?: string;
}

export default CVEntryData;
