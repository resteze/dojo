import java.util.HashMap;
import java.util.Set;
public class MaPOfTheHashmatique {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Track1", "Lyric1");
        trackList.put("Track2", "Lyric2");
        trackList.put("Track3", "Lyric3");
        trackList.put("Track4", "Lyric4");
        Set<String> tracks = trackList.keySet();
        for (String track : tracks){
            System.out.println(track);
            System.out.println(trackList.get(track));
        }
    }
}
