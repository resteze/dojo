import java.util.Date;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        String Response = String.format("Hello %s. Lovely to see you" ,name);
        return Response;
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        String Response = String.format("It is currently %s", date );
        return Response;
    }
    
    public String respondBeforeAlexis(String conversation) {
        String Response;
        if (conversation.indexOf("Alexis") != -1){
            Response = "Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        else if (conversation.indexOf("Alfred") != -1){
            Response = "At your service. As you wish, naturally.";
        }else{
            Response = "Right. And with that I shall retire.";
        }
        return Response;
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}

