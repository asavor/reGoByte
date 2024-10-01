import { IgApiClient } from 'instagram-private-api';

class InstagramApiService {
    private ig: IgApiClient;
    constructor() {
        this.ig = new IgApiClient()
    }

    async login(email: string, password: string) {
        this.ig.state.generateDevice(email);
        await this.ig.account.login(email, password);
    }

    async getFollowers(username: string) {
        const followersFeed = this.ig.feed.accountFollowers(username);
        const followers = await followersFeed.items();
        return followers;
    }
}

export default new InstagramApiService();
