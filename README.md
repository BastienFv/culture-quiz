# Culture Quiz ❓

## Le Sujet

Pour cet exercice, tu dois rendre fonctionnelle une page de quiz. Pour cela, tu dervas écrire un script JS (Javascript) en complétant le fichier script.js du projet.

**Attention** : Ecris bien **tout ton code** dans le fichier **script.js** et **en dessous** de la ligne "NE PAS MODIFIER AU DESSUS DE CETTE LIGNE". **Ne modifie aucun autre fichier**, y compris le dossier "tests" qui contient les tests automatiques qui nous permettront de vérifier le fonctionnement de ton code.

En revanche, n'hésite pas à consulter le fichier index.html pour repérer les élements dont tu pourrais avoir besoin.

### Les questions

Les questions sont déjà présents dans le fichier script.js sous forme d'un tableau d'objets contenant la question, les réponses et l'index de la réponse juste. C'est ce tableau qu'il faudra utiliser pour réaliser l'exercice.

### Afficher une question

Dès le chargement des éléments du DOM, le texte de la première question doit s'afficher dans l'élément (déjà présent dans le fichier index.html):

```
<p id="question"></p>
```

Lorsque l'utilisateur aura sélectionné une réponse, le texte de la question suivante devra remplacer le texte de la question précédente dans cet élément.

### Afficher les réponses

Les réponses correspondant à la question devront s'afficher sous la forme d'élément `<li class="answer"></li>` à l'intérieur de l'élément `<ul id="answers"></ul>` déjà présent dans le fichier index.html. Ils devront **impérativement avoir la classe "answer"**.

La première question et ses réponses devraient ressembler à ceci.

![Maquette ordinateur portable](./images/question-et-reponses.png)

### Valider une réponse

Chaque réponse doit être rendue cliquable après son affichage. Lors du click sur une réponse:

- le score doit être augementé de 1 si la réponse est juste et affiché dans l'élément `<span id="score"></span>` déjà présent dans le fichier index.html
- la question suivante ainsi que ses réponses doivent être affichées

S'il n'y a plus de questions, tu peux afficher un message de remerciement à la place de la question et aucune réponse.
