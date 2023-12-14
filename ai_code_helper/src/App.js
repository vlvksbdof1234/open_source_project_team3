import CodeSpace from "./components/CodeSpace.js";
import MenuContainer from "./components/MenuContainer.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");
<<<<<<< HEAD
  const [currentCode, setCurrentCode] = useState(`// 시간 더하기 함수
  function addTime(baseTime, hoursToAdd, minutesToAdd, secondsToAdd) {
    const resultTime = new Date(baseTime.getTime());
    resultTime.setHours(resultTime.getHours() + hoursToAdd);
    resultTime.setMinutes(resultTime.getMinutes() + minutesToAdd);
    resultTime.setSeconds(resultTime.getSeconds() + secondsToAdd);
    return resultTime;
  }
  
  // 시간 빼기 함수
  function subtractTime(baseTime, hoursToSubtract, minutesToSubtract, secondsToSubtract) {
    const resultTime = new Date(baseTime.getTime());
    resultTime.setHours(resultTime.getHours() - hoursToSubtract);
    resultTime.setMinutes(resultTime.getMinutes() - minutesToSubtract);
    resultTime.setSeconds(resultTime.getSeconds() - secondsToSubtract);
    return resultTime;
  }
  
  // 예시: 현재 시간
  const currentTime = new Date();
  
  // 예시: 2시간, 30분, 45초 뒤의 시간
  const futureTime = addTime(currentTime, 2, 30, 45);
  console.log("현재 시간:", currentTime.toLocaleTimeString());
  console.log("2시간 30분 45초 후의 시간:", futureTime.toLocaleTimeString());
  
  // 예시: 1시간, 15분, 20초 전의 시간
  const pastTime = subtractTime(currentTime, 1, 15, 20);
  console.log("1시간 15분 20초 전의 시간:", pastTime.toLocaleTimeString());
  }`);
  const [currentDiff, setCurrentDiff] = useState(`git bash에서 아래 명령어롤 명령어를 입력해서 결과를 받아오세요!\n\ngit --no-pager diff`);
  const [codeInspect, setCodeInspect] = useState(``);
  const [isCodeInspectLoading, setCodeInspectIsLoading] = useState(false);
=======
  const [currentCode, setCurrentCode] = useState(`// The UnionFind (or Disjoint Set) class is used to keep track of elements partitioned into disjoint subsets.
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

>>>>>>> 41-pseudo-flow
  return (
    <div className="App">
      <Navbar />
      <div className="body">
<<<<<<< HEAD
        <CodeSpace className="topComponent"
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        currentDiff={currentDiff}
        setCurrentDiff={setCurrentDiff}
        setCodeInspect={setCodeInspect}
        setCodeInspectIsLoading={setCodeInspectIsLoading}
=======
        <CodeSpace
          className="topComponent"
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
          currentDiff={currentDiff}
          setCurrentDiff={setCurrentDiff}
>>>>>>> 41-pseudo-flow
        ></CodeSpace>
        <MenuContainer
          className="topComponent"
          curMenu={curMenu}
          currentCode={currentCode}
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
