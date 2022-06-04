
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

let isInt = (n) => !isNaN(n) && Number.isInteger(Number(n));

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    let cmd = msg.trim().split(" ");
    let vb = Api.getContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);
    
    if(!chats[sender]) chats[sender] = {last:null};
    if(chats[sender].last==msg) return;
    chats[sender].last = msg;
    
    // 여기부턴 !명령어 인수입니다.
    if(cmd.length<=1) return;
    if (cmd[0] == (pf+"진동")) {
        if(!isInt(cmd[1]) return replier.reply("정수를 입력하세요.");
        vb.vibrate(Number(cmd[1])*1000);
    }
    
    // 여기는 알아서 비활성화 해주세요.
    if (cmd[0] == "!ip") {
        return replier.reply(org.jsoup.Jsoup.connect("http://api.ipify.org").get().text());
    }
}
