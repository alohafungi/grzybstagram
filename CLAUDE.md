# Grzybstagram — zasady redakcyjne i techniczne

## O projekcie
Niezależny polskojęzyczny blog o królestwie grzybów. Bez wellness-fluffu, bez claimów marketingowych. Standard: ostra szczerość, fakty, źródła.

Cel biznesowy: pozycja #1 w polskim Google na zapytania związane z grzybami (zdrowie, mykologia, harm reduction).

**Projekt jest całkowicie oddzielony od marki Aloha Fungi.** Nie wolno nigdzie w projekcie, w meta tagach, w stopce, w SEO, w About ani w postach wspominać Aloha Fungi, linkować do niej, ani sugerować powiązania. Konto GitHub `alohafungi` jest tylko hostingiem repo i nie pojawia się w publicznej warstwie bloga.

## Język
- Wszystkie treści po polsku
- Interfejs (przyciski, daty, „czytaj więcej") po polsku
- Łacińskie nazwy gatunków stosujemy konsekwentnie (np. *Hericium erinaceus*, *Ganoderma lucidum*)

## Kierunek redakcyjny: A+
Ostre tezy, mocne opinie, demaskowanie ściem branży supli — TAK.

### Co WOLNO i jest preferowane
- Krytyka konkurencji po nazwisku w oparciu o fakty (skład, ceny, certyfikaty, badania)
- Demaskowanie marketingowych ściem (proszki z micelium udające ekstrakty, fake'owe testy beta-glukanów)
- Historia, kultura, antropologia, etnomykologia (Wasson, McKenna, Maria Sabina, Hofmann, Stamets jako postać)
- Aktualna nauka o psilocybinie (Johns Hopkins, MAPS, COMPASS Pathways, Imperial College, Carhart-Harris) — z linkami do publikacji
- Harm reduction dla osób, które już mają zamiar użyć: set & setting, interakcje z lekami (SSRI, MAOI, lit), kiedy NIE brać, sygnały bad tripa, kiedy dzwonić po pomoc, kontakty (Tripsit, PsychonautWiki)
- Ekologia, mycoremediation, mykoarchitektura, biomateriały (Ecovative, MycoWorks), fermentacja, kulinaria
- Mocne tezy o regulacjach, krytyka polityki narkotykowej, postulaty zmian prawnych
- Łacińskie nazwy gatunków zawsze kursywą
- Sceptycyzm wobec własnych ulubionych tez

### Co OBOWIĄZKOWE w każdym tekście o efektach zdrowotnych grzybów
- Cytowanie konkretnego badania: autor, rok, n (liczba uczestników), typ (in vitro / na myszach / RCT na ludziach)
- Wskazanie limitacji (małe n, brak replikacji, finansowanie producenta, in vitro nie znaczy in vivo)
- Rozróżnienie „badanie wykazało" vs „grzyb leczy"
- Polski status prawny jeśli temat tego wymaga (np. psilocybina = Schedule I, posiadanie = przestępstwo art. 62 ustawy o przeciwdziałaniu narkomanii)

### Czego NIE robimy nigdy
1. **Claimów leczniczych bez pokrycia.** Nie piszemy „X leczy Y" jeśli nie ma RCT na ludziach. Piszemy: „badanie Z (autor, rok, n=…) zasugerowało…, limitacje: …"
2. **Instrukcji uprawy psilocybiny.** Żadnych protokołów spawn/substrat/inkubacja/owocowanie, żadnych linków do sklepów z zarodnikami, żadnego „mikroskopowania jako legalna luka". To w Polsce art. 53 ustawy o przeciwdziałaniu narkomanii.
3. **Konkretnych protokołów dawkowania psychodelików jako instrukcji.** Ogólne zakresy z literatury — TAK. „Weź 3.5g w piątek o 18, miks z X" — NIE.
4. **Nieautoryzowanego przepisywania badań.** Jeśli nie jesteśmy pewni danych — zaznaczamy `[DO WERYFIKACJI]` i nie publikujemy dopóki ktoś nie sprawdzi.
5. **Wzmianek o Aloha Fungi w jakiejkolwiek formie.**

## Ton głosu
- Konkretnie, spokojnie, z dystansem do siebie
- Bez clickbaitu („Naukowcy są w szoku!", „TEN grzyb…")
- Bez generycznych AI-fillerów („W dzisiejszym dynamicznym świecie", „warto zauważyć", „kluczowe jest", nadmiar em-daszy)
- Bez nadużywania reguły trzech bez powodu
- Sytuacyjny humor i analogie — TAK, mile widziane
- Pozycja: ciekawski sceptyk z research'em, nie guru, nie influencer wellness, nie akademik na sztywno

## Techniczne
- Stack: Astro 6.x + Tailwind + MDX, motyw Brook 2.0 (holger1411/astro-brook)
- Posty: `src/content/posts/*.md` lub `*.mdx`
- Frontmatter wymagany: `title`, `date`, `excerpt`, `tags`, opcjonalnie `image`, `draft: true` dla wersji roboczych
- Obrazki postów: `public/images/`
- Każdy post który jest jeszcze szkicem → `draft: true`
- Daty w formacie YYYY-MM-DD

## Workflow z Claude Code
- Zanim coś nadpiszesz, pokaż diff i czekaj na akceptację użytkownika
- Przy tworzeniu nowych postów: zaproponuj 3 warianty hooka / leadu i poproś o wybór
- Niezweryfikowane fakty oznaczaj `[DO WERYFIKACJI]` w tekście
- Po większej zmianie zaproponuj commit z opisem co zmieniliśmy
