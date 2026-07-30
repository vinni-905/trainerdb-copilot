document.getElementById("analyze").onclick = () => {

chrome.storage.local.get(["page"], (data)=>{

let text = data.page || "";

let skills=[];

if(text.toLowerCase().includes("java"))
skills.push("Java");

if(text.toLowerCase().includes("react"))
skills.push("React");

if(text.toLowerCase().includes("sql"))
skills.push("SQL");

if(skills.length===0){
skills=[
"Problem Solving",
"Communication",
"Technical Fundamentals"
];
}


document.getElementById("result").innerHTML = `

<h3>🤖 Copilot Insights</h3>

<b>Detected Skills:</b>
<ul>
${skills.map(skill=>`<li>${skill}</li>`).join("")}
</ul>

<b>Interview Preparation:</b>
<ul>
<li>Explain your projects</li>
<li>Prepare role-specific questions</li>
<li>Revise technical fundamentals</li>
</ul>

<b>Recommendation:</b>
<p>
Focus on improving missing technical skills before applying.
</p>

`;

});

};



document.getElementById("save").onclick=()=>{

chrome.storage.local.set({
savedJob:true
});

alert("⭐ Opportunity saved successfully!");

};