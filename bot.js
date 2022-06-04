
/**
 * (String) room
 * (String) sender
 * (Boolean) isGroupChat
 * (void) replier.reply(message)
 * (Boolean) replier.reply(room, message, hideErrorToast = true) // true 고정값 반환
 * (String) imageDB.getProfileBase64()
 * (String) packageName
 */
const pf = "!"
const chats = {};

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if(!chats[sender]) chats[sender] = {last:null};
    if(chats[sender].last==msg) return;
    chats[sender].last = msg;
}
