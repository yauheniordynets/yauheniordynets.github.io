package mytestapp;

import static com.codeborne.selenide.Selenide.*;

import org.junit.Test;
import org.openqa.selenium.By;

public class AppTest {
    @Test
    public void shouldUserLogInTheGame() {
       String user1 = "Test190", user2 = "Test191", user3 = "Test192", password1 = "test190", password2 = "test191", password3 = "test192";
        open("https://ru.kapihospital.com/");
        $(By.id("hotzone_login_head")).click();
        logInUser(user1, password1);
        // should user switch account
        logInUser(user2, password2);
        logInUser(user3, password3);
    }
    public static void logInUser(String login, String password) {
        $(By.name("loginname")).setValue(login);
        $(By.name("password")).setValue(password);
        $(By.className("kh_btn")).click();
        $(By.id("logout")).click();
    }
}
