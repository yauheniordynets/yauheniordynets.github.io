package mytestapp;

import static com.codeborne.selenide.Selenide.*;

import org.junit.Test;
import org.openqa.selenium.By;

/**
 * Unit test for simple App.
 */
public class AppTest {
    @Test
    public void shouldUserLogInTheGame() {
        open("https://ru.kapihospital.com/");
        $(By.id("hotzone_login_head")).click();
        $(By.name("loginname")).setValue("Test190");
        $(By.name("password")).setValue("test190");
        $(By.className("kh_btn")).click();
        // should user switch account
        $(By.id("logout")).click();
        $(By.name("loginname")).setValue("Test191");
        $(By.name("password")).setValue("test191");
        $(By.className("kh_btn")).click();
        $(By.id("logout")).click();
        $(By.name("loginname")).setValue("Test192");
        $(By.name("password")).setValue("test192");
        $(By.className("kh_btn")).click();
    }
}
