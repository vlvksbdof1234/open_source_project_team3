import CodeSpace from "./components/CodeSpace.js";
import MenuContainer from "./components/MenuContainer.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");
  const [curCode, setcurCode] = useState(`// The UnionFind (or Disjoint Set) class is used to keep track of elements partitioned into disjoint subsets.
  class UnionFind {
      constructor(size) {
          // The parent array contains the representative element (or the root) for each subset.
          // Initially, every element is its own parent (its own subset).
          this.parent = Array.from({ length: size }, (_, idx) => idx);
          
          // The rank array is used to keep the tree flat during union operations.
          this.rank = Array(size).fill(0);
      }
  
      // Find method with path compression.
      // It returns the root (representative element) of the subset that 'x' belongs to.
      find(x) {
          if (this.parent[x] !== x) {
              // Path compression: directly connect 'x' to its root.
              this.parent[x] = this.find(this.parent[x]);
          }
          return this.parent[x];
      }
  
      // Union method unites two subsets.
      union(x, y) {
          const rootX = this.find(x);
          const rootY = this.find(y);
  
          if (rootX === rootY) return; // They are already in the same subset.
  
          // The element with the smaller rank should point to the element with the larger rank.
          if (this.rank[rootX] > this.rank[rootY]) {
              this.parent[rootY] = rootX;
          } else if (this.rank[rootX] < this.rank[rootY]) {
              this.parent[rootX] = rootY;
          } else {
              this.parent[rootY] = rootX;
              this.rank[rootX]++; // Increase the rank of rootX by 1.
          }
      }
  }
  
  // Kruskal's algorithm function.
  function kruskal(graph) {
      const edges = [];
      
      // Transform the graph into an array of edges.
      for (const [u, neighbors] of Object.entries(graph)) {
          for (const [v, weight] of Object.entries(neighbors)) {
              edges.push([parseInt(u), parseInt(v), weight]);
          }
      }
      
      // Sort the edges by weight (in ascending order).
      edges.sort((a, b) => a[2] - b[2]);
  
      const unionFind = new UnionFind(Object.keys(graph).length);
      const mst = []; // This will hold the edges of our minimum spanning tree.
  
      // For every edge, in increasing order of their weight.
      for (const [u, v, weight] of edges) {
          // If the two vertices of the edge are in different subsets, add the edge to the MST.
          if (unionFind.find(u) !== unionFind.find(v)) {
              mst.push([u, v, weight]);
              unionFind.union(u, v); // Merge the two subsets.
          }
      }
  
      return mst; // Return the minimum spanning tree.
  }
  `);


  const [currentDiff, setCurrentDiff] = useState(
    `git bash에서 git diff 명령어를 입력해서 결과를 받아오세요!`
  );
  
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <CodeSpace
          className="topComponent"
          curCode={curCode}
          setcurCode={setcurCode}
          currentDiff={currentDiff}
          setCurrentDiff={setCurrentDiff}
        ></CodeSpace>
        <MenuContainer
          className="topComponent"
          curMenu={curMenu}
          curCode={curCode}
          setCurMenu={setCurMenu}
          codeInspect={codeInspect}
          setCodeInspect={setCodeInspect}
          isCodeInspectLoading={isCodeInspectLoading}
          setCodeInspectIsLoading={setCodeInspectIsLoading}
        />
      </div>
    </div>
  );
}

export default App;
