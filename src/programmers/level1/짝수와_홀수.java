package programmers.level1;

public class 짝수와_홀수 {
    public static void main(String[] args) {
        int num = 4;
        solution(num);
    }

    public static String solution(int num) {
        return num % 2 == 0 ? "Even" : "Odd";
    }
}
