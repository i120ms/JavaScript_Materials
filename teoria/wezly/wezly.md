#### Node i childNode w JavaScript

### 1. Podstawowe pojęcie
.
- **Interfejs** - Punkt styku umożliwiający komunikację między programami (np. JavaScript ↔ strona HTML). 
  
  *(Interfejs to ogólne pojęcie, które odnosi się do punktu styku lub połączenia między dwoma różnymi systemami, urządzeniami lub oprogramowaniem, umożliwiając im wzajemne komunikowanie się i współpracę.)*
.
- **DOM (Document Object Model)** - Interfejs programistyczny, który przedstawia dokument HTML jako **strukturę drzewiastą**. Przeglądarka po wczytaniu strony tworzy jej model DOM. Każdy element w tym drzewie nazywamy **węzłem**.
  
  *(Interfejs programistyczny, który przedstawia dokument HTML jako strukturę drzewiastą. Każdy element w tym drzewie nazywamy węzłem. DOM porządkuje elementy w strukturę drzewa, gdzie każdy element ma swoje miejsce i relacje z innymi. Przeglądarka internetowa, gdy wczytuje stronę, tworzy z niej model DOM.)*

### 2. Znaczenie węzłów
.
- Dzięki DOM, programy (np. JavaScript) mogą **"odwiedzać" poszczególne elementy strony, czytać ich zawartość, zmieniać ją, a nawet usuwać lub dodawać nowe elementy.** Dzięki węzłom możemy dynamicznie zmieniać zawartość strony, dodawać nowe elementy, usuwać istniejące, a także modyfikować ich styl i zawartość. Węzły są punktem zaczepienia dla obsługi zdarzeń, takich jak **kliknięcie, najechanie kursorem** itp.

### 3. Węzły w DOM
.
![[Pasted image 20251216191748.png]]

### 4. Ćwiczenie #1
.
Znajdź węzły:
![[Pasted image 20251216191909.png]]

Odpowiedź do ćwiczenia:
![[Pasted image 20251216191935.png]]

### 5. Przechodzenie przez drzewo węzłów: Podróż po DOM
- Przechodzenie przez drzewo węzłów (ang. tree traversal) to fundamentalna operacja w programowaniu związanym z DOM (Document Object Model). Pozwala nam na **systematyczne odwiedzanie wszystkich węzłów w drzewie.**
- Przeszukiwanie drzewa:
.
![[Pasted image 20251216192116.png]]

### 6. Ćwiczenie #2
Na przykładzie drzewa genealogicznego rozrysuj sposoby przeszukiwania w głąb
Np. za pomocą **rekurencji**:
.
![[Pasted image 20251216192233.png]]

### 7. Właściwość nodeName
- Każdy węzeł ma swój **nodeName.** Jest ona jednym z podstawowych atrybutów każdego węzła w drzewie DOM. Służy ona do **identyfikacji typu węzła, czyli określenia, czy jest to element, atrybut, tekst czy inny rodzaj węzła.**
.
![[Pasted image 20251216192338.png]]

### 8. Metody działające na węzłach
- Tworzenie nowych węzłów:
    - **createElement(tagName)** : Tworzy nowy element o podanej nazwie.
    - **createTextNode(text)** : Tworzy nowy węzeł tekstowy zawierający podany tekst.
    - **createDocumentFragment()** : Tworzy nowy, pusty fragment dokumentu, który można wykorzystać do grupowania wielu węzłów przed dodaniem ich do drzewa DOM.

- Dodawanie i usuwanie węzłów:
    - **appendChild(node)** : Dodaje węzeł jako ostatnie dziecko danego węzła.
    - **insertBefore(newNode, referenceNode)** : Wstawia nowy węzeł przed określonym węzłem referencyjnym.
    - **replaceChild(newNode, oldNode)** : zastępuje stary węzeł nowym.
    - **removeChild(node)** : Usuwa podany węzeł z drzewa DOM.

- Wyszukiwanie węzłów:
    - **getElementByTagName(tagName)** : Zwraca kolekcję wszystkich elementów o podanej nazwie.
    - **getElementById(id)** : Zwraca element o podanym identyfikatorze.
    - **querySelector(selectors)** : Zwraca pierwszy element pasujący do podanego selektora CSS.
    - **querySelectorAll(selectors)** : Zwraca kolekcję wszystkich elementów pasujących do podanego selektora CSS.

- Inne przydatne:
    - cloneNode(deep) : Tworzy klon węzła. Parametr **deep** określa, czy sklonować również potomków. (tf is even that about?!)
    - hasChildNodes() : Sprawdza, czy węzeł ma jakiekolwiek dzieci. (that must be a wind)
    - parentNode : Zwraca rodzica danego węzła. 
    - childNodes : Zwraca kolekcję wszystkich dzieci danego węzła.
    - firstChild : Zwraca pierwsze dziecko danego węzła.
    - lastChild : Zwraca ostatnie dziecko danego węzła.
    - nextSibling : Zwraca następne rodzeństwo danego węzła.
    - previousSibling : Zwraca poprzednie rodzeństwo danego węzła.

### 9. Metoda getElementsByTagName()
Przykład zastosowania:
.
![[Pasted image 20251216194131.png]]

### 10. childNodes
Właściwość w JavaScript, która służy do pobrania wszystkich dzieci danego elementu w drzewie DOM. Są one pobierane do tablicy, która można iterować:
.
![[Pasted image 20251216194702.png]]

#### ⚠️ Uwaga
childNodes jakiegoś elementu, dotyczy bezpośrednich dzieci tego elementu, czyli elementów znajdujących się na następnym poziomie w drzewie DOM.

### 11. Ćwiczenie #3
Co trafi do tablicy childNodes elementu o identyfikatorze parent
.
![[Pasted image 20251216194848.png]]

Odpowiedź
.
![[Pasted image 20251216194909.png]]

### 12. Ćwiczenie #4
Rozpoznaj i podaj działanie metod i właściwości węzłów w kodzie
.
![[Pasted image 20251216194953.png]]

Odpowiedź (WERSJA ULTIMATE - NOT MADE BY MT(JS BOSS) BUT BY GPT DUDE)
.
### 1. `nodeName`

**Właściwość węzła DOM**

- Zwraca nazwę węzła
    
- Pozwala zidentyfikować, jakiego typu jest węzeł
    
- Dla elementów HTML zwraca nazwę znacznika (np. `DIV`, `P`)
    
- Dla węzłów tekstowych zwraca `#text`
    

**Zastosowanie w kodzie:**  
Wypisuje nazwę aktualnie odwiedzanego węzła w konsoli.

---

### 2. `firstChild`

**Właściwość węzła DOM**

- Zwraca **pierwsze dziecko** danego węzła
    
- Może to być element HTML lub węzeł tekstowy
    
- Jeśli węzeł nie ma dzieci → zwraca `null`
    

**Zastosowanie w kodzie:**  
Umożliwia przejście do pierwszego dziecka aktualnego węzła.

---

### 3. `nextSibling`

**Właściwość węzła DOM**

- Zwraca **następny węzeł na tym samym poziomie drzewa**
    
- Może zwrócić element lub węzeł tekstowy
    
- Jeśli nie ma kolejnego węzła → zwraca `null`
    

**Zastosowanie w kodzie:**  
Umożliwia przejście do „brata” aktualnego węzła.

---

### 4. Rekurencja

**Technika programistyczna**

- Funkcja wywołuje samą siebie
    
- Stosowana do przechodzenia po strukturach drzewiastych
    

**Zastosowanie w kodzie:**  
Funkcja `traversePreOrder()` wywołuje samą siebie dla kolejnych węzłów DOM.

---

### 5. `document.getElementById()`

**Metoda wyszukiwania węzłów**

- Pobiera element o podanym `id`
    
- Zwraca pojedynczy element DOM
    

**Zastosowanie w kodzie:**  
Pobiera węzeł początkowy (`root`), od którego rozpoczyna się przechodzenie drzewa.

---

### 6. Rodzaj przechodzenia drzewa

**Przechodzenie w głąb (preorder traversal)**

Kolejność:

1. Odwiedzenie bieżącego węzła
    
2. Przejście do jego pierwszego dziecka
    
3. Przejście do kolejnych rodzeństw
    

---

### Podsumowanie 

- `nodeName` → nazwa węzła
    
- `firstChild` → pierwsze dziecko węzła
    
- `nextSibling` → następny węzeł na tym samym poziomie
    
- `getElementById()` → wyszukiwanie elementu po `id`
    
- Rekurencja → przechodzenie po drzewie DOM
