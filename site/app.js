'use strict';
const grid=document.querySelector('#work-grid'),dialog=document.querySelector('#detail'),content=document.querySelector('#detail-content');
let works=[],filter='All',expanded=false;
const revised={web1:{title:'カボニューレコード / フェーズ2'},web7:{title:'デザメモ / 教育Webアプリ'},web6:{title:'フロントエンドカリキュラム'},web8:{title:'社内ポータル / Webアプリ'},app1:{title:'価値観アプリ / UIデザイン'}};
function el(tag,text,className){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(className)e.className=className;return e;}
function render(){const selected=works.filter(w=>filter==='All'||w.category===filter);const shown=expanded?selected:selected.slice(0,6);grid.replaceChildren();for(const w of shown){const b=el('button',undefined,'work-card');b.type='button';b.setAttribute('aria-label',w.title+'の詳細を見る');const box=el('div',undefined,'work-image');if(w.id==='cx'){box.classList.add('cx-thumb');box.append(el('span','Conversation','cx-word'));for(const cl of ['bubble','bubble outline']){const bubble=el('div',undefined,cl);bubble.setAttribute('aria-hidden','true');for(let n=0;n<3;n++)bubble.append(el('i'));box.append(bubble);}box.append(el('span','AI / SCENARIO DESIGN','cx-foot'));}if(w.images[0]){const img=el('img');img.src='assets/'+w.images[0];img.alt=w.title+'の制作画面';img.loading='lazy';box.append(img);}const meta=el('div',undefined,'card-meta');meta.append(el('span',(w.category==='CX'?'Conversation':w.category)+(w.startedAt?' / '+w.startedAt.replace('-','.') : '')),el('span','↗'));b.append(box,meta,el('h3',w.title));b.addEventListener('click',()=>openWork(w));grid.append(b);}document.querySelector('#show-more').hidden=expanded||selected.length<=6;document.querySelector('#work-count').textContent=`${selected.length}件中${shown.length}件を表示`}
function show(){dialog.showModal();document.body.style.overflow='hidden';content.scrollTop=0;}
function appendParagraphs(parent,text){for(const block of text.split(/\n\s*\n/)){const t=block.replace(/\s*\n\s*/g,'').trim();if(t)parent.append(el('p',t,'detail-paragraph'));}}
function appendWorkHeader(w){
const heading=Object.assign(el('h2',w.title),{id:'detail-title'});
content.replaceChildren(el('span',w.category==='CX'?'CX / CONVERSATION DESIGN':w.category,'eyebrow'),heading,el('p',w.intro,'work-intro'));
const facts=el('dl',undefined,'work-facts');
for(const [label,value] of [['制作期間',w.period],['担当',w.role],['事業・制作規模',w.scope]]){
if(value){const row=el('div');row.append(el('dt',label),el('dd',value));facts.append(row);}}
content.append(facts);
for(const section of w.sections||[])appendSection(content,section);
}
function openWork(w){
if(w.id==='cx'){openCx();return;}
appendWorkHeader(w);
const gallery=el('div',undefined,'gallery');
for(const [i,name]of w.images.entries()){
const dim=w.dimensions[name],figure=el('figure');figure.style.setProperty('--native-width',dim.width+'px');
if(dim.width>800||dim.width/dim.height>1.35)figure.classList.add('wide');
const link=el('a');link.href='assets/full/'+name;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',w.title+' 制作画面 '+(i+1)+'を元のサイズで開く');
const img=el('img');img.src=link.href;img.alt=w.title+' 制作画面 '+(i+1);img.width=dim.width;img.height=dim.height;img.loading='lazy';
link.append(img);figure.append(link,el('figcaption','制作画面 '+(i+1)+' / タップで元のサイズを表示'));gallery.append(figure);
}
if(w.images.length)content.append(el('h3','制作画面','gallery-heading'),gallery);
show();
}
for(const b of document.querySelectorAll('[data-filter]'))b.addEventListener('click',()=>{filter=b.dataset.filter;expanded=false;for(const x of document.querySelectorAll('[data-filter]'))x.setAttribute('aria-pressed',String(x===b));render();});
document.querySelector('#show-more').addEventListener('click',()=>{expanded=true;render();});
dialog.addEventListener('close',()=>{document.body.style.overflow='';});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
function openCx(){const w=works.find(item=>item.id==='cx');if(!w)return;appendWorkHeader({...w,title:'AIチャットボットのシナリオ設計・開発'});show();}
document.querySelector('#cx-open').addEventListener('click',openCx);
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('hm.hzm331@gmail.com');status.textContent='コピーしたよ';}catch{status.textContent='コピーできなかったため、メールアドレスを選択してコピーしてください。';}});
Promise.all(['works.json','work-details.json'].map(path=>fetch(path+'?v=10').then(r=>{if(!r.ok)throw Error('作品データの読み込みに失敗');return r.json();}))).then(([data,details])=>{
works=data.map(w=>({...w,...revised[w.id],...details[w.id]}));
works.push({id:'cx',title:'AIチャットボットの会話設計',category:'CX',images:[],role:'会話・UI設計 / 開発 / テスト / 運用保守 / 標準化・効率化',dimensions:{},startedAt:'2024-12',period:'2024.12 — 現在',...details.cx});
works.sort((a,b)=>(b.startedAt||'').localeCompare(a.startedAt||''));render();
}).catch(()=>{grid.append(el('p','作品を読み込めませんでした。ページを再読み込みしてください。'));document.querySelector('#show-more').hidden=true;});


const careerDetails={
sales:{title:'人材営業',label:'CAREER / 2018.04 — 2021.07',intro:'パーソルキャリア株式会社で、法人向け人材紹介（RA）とスカウトメール配信（HA）を担当しました。',sections:[
{title:'法人向け人材紹介 / RA',period:'2018年4月〜2019年7月',bullets:['月40〜50社程度への働きかけ、アポイント獲得、経営者・人事担当への採用ニーズのヒアリング。','求人票の新規作成・改善、候補者の推薦、面談日程の調整、キャリアアドバイザーを介した候補者の意向確認。'],body:'採用条件や企業の意向を細かく聞き取り、求人票を丁寧に作成。応募者への情報提供や推薦後の確認業務も効率よく進むように、最初の情報整理を重視しました。',fact:'RA在籍期間の平均予算達成率：105％'},
{title:'スカウトメール配信 / HA',period:'2019年8月〜2021年7月',bullets:['転職者に合わせたスカウトメールの作成・配信。手動で作り込むメールは1日20件程度。','営業担当約5名の進捗確認、アドバイス、応募後の営業活動のサポート。'],body:'反応のよい求人やメールの魅力を分析し、企業への追加ヒアリングや他のHAの意見を取り入れて文面を改善しました。',fact:'2021年1月〜5月：5か月連続で予算達成（入社決定者数・面接案件増加数など）'}]},
web:{title:'Webデザイン・開発・運用',label:'CAREER / 2021.08 —',intro:'2021年8月に株式会社CONVICTIONへ入社。IT事務・サイト運用から、フロントエンド開発とWebデザインへ担当領域を広げ、社内教育やカリキュラム外販、SNS企画、採用業務補助も兼任しました。',sections:[
{title:'サステナブル関連Webアプリ',period:'2022年8月〜 / カボニューレコード',bullets:['サービス開始前から参画し、デザイナー1名体制でサービス全体のデザインを担当。','クライアントへのヒアリング、要件・機能・デザインの提案、ワイヤーフレーム・カンプ作成、コーダーへの指示、コーディング、文字校正。','週1回の会議を主催し、クライアントやPMと仕様・デザインについて意見交換。'],body:'要件定義・開発・運用保守に携わりました。仕様変更の多いアジャイル開発のなかで、ペルソナや目的に立ち返って提案することを重視しました。',fact:'サービス全体の利用者数：約40万人、新規登録：1日平均60〜70人（2024年10月時点）',note:'利用者数はサービスの規模であり、自身の施策単独の獲得数を表すものではありません。プロジェクトは9名体制で、デザイナーは1名。'},
{title:'ネット銀行マイページの開発',period:'2022年2月〜7月',bullets:['詳細設計、UI設計、プログラムコーディング、単体テスト、保守メンテナンス。','銀行側のデザイン案を基に、見出しや装飾の一貫性などについてUI改善案を提示。'],body:'PM1名・SE5名の6名体制。APIの完成を待つ間に進められる実装を整理するなど、チーム全体の進行を見据えて作業しました。'},
{title:'配信サイトの運用・CMS改善',period:'2021年11月〜2022年1月',bullets:['ボートレース配信の設定、配信用CMSの機能改善提案。','バナー・カルーセルのコーディング、Accessを使った配信状況の管理。'],body:'5名のチームで運用を担当。設定ミスを防ぐことに加え、ミスが起きにくい状態をつくるためにCMSの改善案を出しました。'},
{title:'キャッシュレス事業のIT事務',period:'2021年8月〜10月',bullets:['全国のQRコード設置状況・導入状況の確認、営業資料の作成。','kintone・PowerPoint・Outlookを使用。'],body:'営業・事務あわせて約20名の体制。確認項目やタスクの多い業務で、1日の処理計画を立て、正確さとスピードを両立できるように進めました。'},
{title:'社内教育・制作に共通する工夫',bullets:['初学者向けのデザイン・フロントエンドカリキュラム制作、社員教育、カリキュラム外販。','調査やユーザーの視点を根拠に提案し、エラー表示など実装後に起こり得る状態も設計段階で画面にして共有。','疑問点は、自分で検討した範囲と不明点を整理して早めに相談。周囲が相談しやすい関係づくりも意識。']}]
}};
function appendSection(parent,data){const section=el('section',undefined,'modal-section');section.append(el('h3',data.title));if(data.period)section.append(el('p',data.period,'section-period'));if(data.bullets){const list=el('ul');for(const text of data.bullets)list.append(el('li',text));section.append(list);}if(data.body)appendParagraphs(section,data.body);if(data.fact)section.append(el('p',data.fact,'modal-fact'));if(data.note)section.append(el('p',data.note,'source-note'));parent.append(section);}
for(const b of document.querySelectorAll('[data-career]'))b.addEventListener('click',()=>{const d=careerDetails[b.dataset.career];const title=Object.assign(el('h2',d.title),{id:'detail-title'});content.replaceChildren(el('span',d.label,'eyebrow'),title,el('p',d.intro));for(const section of d.sections)appendSection(content,section);show();});
document.querySelector('#about-more').addEventListener('click',()=>{content.replaceChildren(el('span','ABOUT / SKILLS & QUALIFICATIONS','eyebrow'),Object.assign(el('h2','スキル・資格'),{id:'detail-title'}));const list=el('dl',undefined,'profile-list');for(const [label,text]of [['会話・コンテンツ設計','チャットボットシナリオ設計、会話UI設計、LLM活用、TTS調整、ライティング・校正、教育資料・カリキュラム作成'],['デザイン','Figma / FigJam / Illustrator / Photoshop / XD / After Effects / CapCut'],['開発','HTML / CSS / JavaScript / jQuery / Vue.js / Firebase / Git / Backlog / Google Analytics 4'],['学歴','明治大学 文学部 文学科 日本文学専攻 卒業（2018年3月）'],['資格','中学校・高等学校教諭一種免許（国語）、普通自動車第一種運転免許（いずれも2018年3月）。東京商工会議所 カラーコーディネーター検定 アドバンスクラス（2024年7月）']])list.append(el('dt',label),el('dd',text));content.append(list);show();});

