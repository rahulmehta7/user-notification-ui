import mockUsers from '../../public/data/users'
import mockInvitations from '../../public/data/invitations'
import mockInvitationsUpdate from '../../public/data/invitations_update'

export async function authenticateUser(userName, password) {
    if(mockUsers.users.find(user => {
        return(user.email == userName && user.password == password)
    }))
    {
        let token = userName + '_' + Math.floor((Math.random() * 10000) + 1);
        localStorage.setItem("samauthToken",  token);
        return true;
    }
    else{
        return false;
    }              
}

export async function fetchUserNotification(update) {
    let token = localStorage.getItem("samauthToken");
    let splitToken = token.split('_');
    let userName = splitToken[0]
    let user = mockUsers.users.find(user => {
        return(user.email == userName)
    })        
    
    let userInvites = [];
    if(user)
    {
        if(!update)
        {
            userInvites = mockInvitations.invites.filter((invite) => {
                return (invite.user_id == user.user_id)    
            }) 
        }
        else {
            userInvites = mockInvitationsUpdate.invites.filter((invite) => {
                return (invite.user_id == user.user_id)    
            })             
        }
    }   

    return userInvites;    
}

