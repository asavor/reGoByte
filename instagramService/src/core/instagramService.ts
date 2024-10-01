import InstagramApiService from '../services/instagramApiService';


function getUserFollowing() {
}



function InstagramService() {

    return {
        async getUsersFollowers( username: string)  {
            await InstagramApiService.login("email", "password");

            const followers = await InstagramApiService.getFollowers(username);
            return followers;
        },
        getUserFollowing

    };
}

module.exports = InstagramService();


