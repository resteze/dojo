
// You will need to import the Random library from java.util
import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {
    // To use methods from the Random library you will need to create an instance of
    // Random
    Random randMachine = new Random();

    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> randomNums = new ArrayList<Integer>(10);
        for (int i = 0; i < randomNums.size(); i++) {
            int randomNum = randMachine.nextInt(19) + 1;
            randomNums.add(i, randomNum);
        }
        return randomNums;
    }

    public char getRandomLetter() {
        char alpha[] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'y', 'z' };
        int index = randMachine.nextInt(25);
        return alpha[index];
    }

    public String generatePassword() {
        String password = "";
        for (int i = 0; i < 8; i++) {
            char letter = getRandomLetter();
            password += letter;
        }
        return password;
    }
    public ArrayList<String> getNewPasswordSet(int setLength) {
        ArrayList<String> passwordSet = new ArrayList<String>();
        for (int i = 0; i < setLength; i++ ){
            String password = generatePassword();
            passwordSet.add(password);
        }
        return passwordSet;
    }
}
