
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
    if (Device.getBatteryLevel()>=15) {Api.makeNoti("전원이 부족해요!","배터리가 부족하여, 봇의 작동을 중단시켰어요.",444);Api.off();return;};
   
    let date = new Date();
    
    let cmd = msg.trim().split(" ");
    let vb = Api.getContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);
    
    if(!chats[sender]) chats[sender] = {last:null};
    if(chats[sender].last==msg) return;
    chats[sender].last = msg;
    
    if(cmd[0]=="!시간") return replier.reply("현재 시각은, "+date);
    
    // 여기부턴 !명령어 인수입니다.
    if(cmd.length<=1) return;
    if (cmd[0] == (pf+"진동")) {
        if(!isInt(cmd[1])) return replier.reply("정수를 입력하세요.");
        vb.vibrate(Number(cmd[1])*1000);
    }
    
    
    // 여기는 알아서 비활성화 해주세요.
    if (cmd[0] == "!ip") {
        Api.showToast("누군가 나의 아이피를 조회함. 채팅방: "+room);
        return replier.reply(org.jsoup.Jsoup.connect("http://api.ipify.org").get().text());
    }
}
