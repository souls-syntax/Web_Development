# React

Advantages

1. Single page application(SPA){ Don't need for reload }
2. It's a component based architecture
3. Have it's own syntax JSX
4. Reusability of component
5. Virtual DOM

Disadvantage

1. Less SEO due to there being just one page so less semantic tag for the crawler.
2. Unidirectional data flow
3. No router of it's own


## JSX

JS+HTML

### Question: Who converts JSX to JS.

Babel is a compiler which converts jsx into js.

**The manager which manages resources(basically codes, image files etc).**
Bundlers
1. Web Packs
2. vite
3. Parcel

### Types of components

1. Functional components
2. Class based components (not used)

Functional components are static but since it was easy the devs created builtin functions hooks which made it dynamic as the class based components were pain to write so was depreceated.

So basically components are just functions.
The components can only return JSX.

```jsx

function Sam() {
   return{
    <div>
    ... 
    </div>
    
} 
}


```






























