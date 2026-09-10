<?php
$conn = mysqli_connect("localhost", "root", "", "czeskiRaj");
mysqli_set_charset($conn, "utf8mb4");


// 1. OBSŁUGA USUWANIA (Żądanie GET)

if (isset($_GET["usun"])) {
    $id = $_GET["usun"];

    mysqli_query($conn, "DELETE FROM trasy WHERE id = $id");

    header("Location: index.php");
    exit();
}


// 2. OBSŁUGA DODAWANIA (Żądanie POST)

if (isset($_POST["dodaj_trase"])) {
    $nazwa = $_POST["nazwa_trasy"];
    $dlugosc = $_POST["dlugosc_trasy"];
    $trudnosc = $_POST["trudnosc"];
    $zdjecie = $_POST["zdjecie"];

    mysqli_query($conn, "INSERT INTO trasy (nazwa_trasy, dlugosc_trasy, trudnosc, zdjecie)
                         VALUES ('$nazwa', '$dlugosc', '$trudnosc', '$zdjecie')");

    header("Location: index.php");
    exit();
}

?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baza Tras - Czeski Raj</title>
    <link rel="stylesheet" href="1style.css">
</head>

<body>

<div class="container">

    <header>
        <h1>Zarządzanie Trasami Turystycznymi</h1>
        <p>Aplikacja bazodanowa - Czeski Raj</p>
    </header>


    <!-- Formularz dodawania nowej trasy -->

    <div class="form-section">

        <h3>Dodaj nową trasę</h3>

        <form action="index.php" method="POST">

            <div class="form-group full-width">
                <label for="nazwa_trasy">Nazwa trasy:</label>
                <input type="text" name="nazwa_trasy" id="nazwa_trasy"
                       required placeholder="np. Skalne miasto Adršpach">
            </div>

            <div class="form-group">
                <label for="dlugosc_trasy">Długość (km):</label>
                <input type="number" step="0.1" name="dlugosc_trasy"
                       id="dlugosc_trasy" required placeholder="np. 5.5">
            </div>

            <div class="form-group">
                <label for="trudnosc">Trudność (1-5):</label>
                <input type="number" min="1" max="5"
                       name="trudnosc" id="trudnosc" required>
            </div>

            <div class="form-group">
                <label for="zdjecie">Nazwa pliku zdjęcia:</label>
                <input type="text" name="zdjecie" id="zdjecie"
                       required placeholder="np. z9.jpg">
            </div>

            <div class="form-group full-width">
                <button type="submit" name="dodaj_trase">
                    Dodaj do bazy
                </button>
            </div>

        </form>

    </div>


    <!-- Tabela wyświetlająca rekordy -->

    <h3>Lista dostępnych tras</h3>

    <table>

        <thead>
            <tr>
                <th>ID</th>
                <th>Nazwa trasy</th>
                <th>Długość</th>
                <th>Trudność</th>
                <th>Miniatura</th>
                <th>Plik</th>
                <th>Akcje</th>
            </tr>
        </thead>

        <tbody>

            <?php

            // 3. POBIERANIE I WYŚWIETLANIE DANYCH

            $wynik = mysqli_query($conn, "SELECT * FROM trasy");

            while ($wiersz = mysqli_fetch_assoc($wynik)) {

                echo "<tr>";

                echo "<td>" . $wiersz["id"] . "</td>";

                echo "<td>" . $wiersz["nazwa_trasy"] . "</td>";

                echo "<td>" . $wiersz["dlugosc_trasy"] . " km</td>";

                echo "<td>" . $wiersz["trudnosc"] . "</td>";

                echo "<td>";
                echo "<img src='" . $wiersz["zdjecie"] . "' width='100'>";
                echo "</td>";

                echo "<td>" . $wiersz["zdjecie"] . "</td>";

                echo "<td>";
                echo "<a href='index.php?usun=" . $wiersz["id"] . "'>Usuń</a>";
                echo "</td>";

                echo "</tr>";
            }

            // Zamknięcie połączenia
            mysqli_close($conn);

            ?>

        </tbody>

    </table>

</div>

</body>
</html>