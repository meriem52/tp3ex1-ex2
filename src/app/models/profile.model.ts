export class Profile {
  constructor(
    public name: string = '',
    public profession: string = '',
    public motto: string = '',
    public jobDescription: string = '',
    public followers: number = 0,
    public following: number = 0,
    public projects: number = 0,
    public image: string = ''
  ) {}

  // Méthodes utilitaires
  clone(): Profile {
    return new Profile(
      this.name,
      this.profession,
      this.motto,
      this.jobDescription,
      this.followers,
      this.following,
      this.projects,
      this.image
    );
  }

  // Validation
  isValid(): boolean {
    return !!this.name && !!this.profession;
  }

  // Calcul de stats
  getTotalConnections(): number {
    return this.followers + this.following;
  }
}