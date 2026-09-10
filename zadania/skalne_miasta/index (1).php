<?php
// Nawiązanie połączenia (podejście proceduralne)
$conn = mysqli_connect("localhost", "root", "", "czeskiRaj");

// Ustawienie kodowania znaków
mysqli_set_charset($conn, "utf8mb4");

// 1. OBSŁUGA USUWANIA (Żądanie GET)
  
    // Przekierowanie
   

// 2. OBSŁUGA DODAWANIA (Żądanie POST)
   
    // Przekierowanie
   
?>



<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baza Tras - Czeski Raj</title>
    <link rel="stylesheet" href="style.css">
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
                <input type="text" name="nazwa_trasy" id="nazwa_trasy" required placeholder="np. Skalne miasto Adršpach">
            </div>
            <div class="form-group">
                <label for="dlugosc_trasy">Długość (km):</label>
                <input type="number" step="0.1" name="dlugosc_trasy" id="dlugosc_trasy" required placeholder="np. 5.5">
            </div>
            <div class="form-group">
                <label for="trudnosc">Trudność (1-5):</label>
                <input type="number" min="1" max="5" name="trudnosc" id="trudnosc" required>
            </div>
            <div class="form-group">
                <label for="zdjecie">Nazwa pliku zdjęcia:</label>
                <input type="text" name="zdjecie" id="zdjecie" required placeholder="np. z9.jpg">
            </div>
            <div class="form-group full-width">
                <button type="submit" name="dodaj_trase">Dodaj do bazy</button>
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
           
            
            // Zamknięcie połączenia
            mysqli_close($conn);
            ?>
        </tbody>
    </table>
</div>

</body>
</html>