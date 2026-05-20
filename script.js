// مصفوفة البيانات (قاعدة البيانات المصغرة للتطبيق)
const quranData = [
  {
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      meta: "سورة الفاتحة - آية 1",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      grammar: "<strong>بِسْمِ:</strong> الباء حرف جر، و(سم) اسم مجرور بالباء وعلامة جره الكسرة الظاهرة، والجار والمجرور متعلقان بمحذوف تقديره (أبتدئ). وهو مضاف.<br><strong>اللَّهِ:</strong> لفظ الجلالة مضاف إليه مجرور وعلامة جره الكسرة الظاهرة.<br><strong>الرَّحْمَٰنِ:</strong> نعت مجرور وعلامة جره الكسرة.<br><strong>الرَّحِيمِ:</strong> نعت ثانٍ مجرور وعلامة جره الكسرة.",
      balagha: "• <strong>براعة الاستهلال:</strong> بدأت السورة بالبسملة وفيها براعة استهلال تشير إلى أن العمل لا يبدأ إلا بالله.<br>• <strong>الإيجاز بالحذف:</strong> حذف الفعل تقديره (أبتدئ باسم الله).<br>• <strong>صيغة المبالغة:</strong> الجمع بين الرحمن والرحيم لتأكيد عموم الرحمة وثبوتها."
  },
  {
      text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      meta: "سورة الفاتحة - آية 2",
      translation: "[All] praise is [due] to Allah, Lord of the worlds -",
      grammar: "<strong>الْحَمْدُ:</strong> مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره.<br><strong>لِلَّهِ:</strong> اللام حرف جر، ولفظ الجلالة مجرور باللام وعلامة جره الكسرة، والجار والمجرور متعلقان بمحذوف خبر المبتدأ.<br><strong>رَبِّ:</strong> نعت (صفة) للفظ الجلالة مجرور وعلامة جره الكسرة الظاهرة، وهو مضاف.<br><strong>الْعَالَمِينَ:</strong> مضاف إليه مجرور وعلامة جره الياء لأنه ملحق بالجمع المذكر السالم.",
      balagha: "• <strong>العدول إلى الجملة الاسمية:</strong> اختيار الجملة الاسمية (الْحَمْدُ لِلَّهِ) يفيد الثبوت والاستمرار الدائم للحمد.<br>• <strong>تعريف (الحمد) بأل:</strong> تفيد استغراق واستيعاب جميع أنواع المحامد لله عز وجل وحده.<br>• <strong>إضافة (رب) إلى (العالمين):</strong> عموم وشمول الربوبية لكل ما سوى الله سبحانه وتعالى."
  },
  {
      text: "الرَّحْمَٰنِ الرَّحِيمِ",
      meta: "سورة الفاتحة - آية 3",
      translation: "The Entirely Merciful, the Especially Merciful.",
      grammar: "<strong>الرَّحْمَٰنِ:</strong> نعت للفظ الجلالة في الآية السابقة مجرور وعلامة جره الكسرة الظاهرة.<br><strong>الرَّحِيمِ:</strong> نعت ثانٍ مجرور وعلامة جره الكسرة الظاهرة.",
      balagha: "• <strong>تكرار الصفة:</strong> تكرار صفة الرحمة بعد قوله (رب العالمين) لبيان أن ربوبيته عز وجل للبشر والكون مبنية على الرحمة واللطف لا على القهر والبطش."
  }
];

// المؤشر الحالي لمعرفة أي آية معروضة الآن
let currentIndex = 0;

// دالة (Function) تحديث وعرض البيانات في الواجهة واختبار الأزرار
function updateVerse() {
  const currentVerse = quranData[currentIndex];
  
  document.getElementById("quranText").innerText = currentVerse.text;
  document.getElementById("metaInfo").innerText = currentVerse.meta;
  document.getElementById("translationText").innerText = currentVerse.translation;
  document.getElementById("grammarText").innerHTML = currentVerse.grammar;
  document.getElementById("balaghaText").innerHTML = currentVerse.balagha;
  
  // التحكم بالأزرار لتعطيلها تلقائياً عند أول آية أو آخر آية في المصفوفة
  document.getElementById("prevBtn").disabled = (currentIndex === 0);
  document.getElementById("nextBtn").disabled = (currentIndex === quranData.length - 1);
}

// دالة الانتقال للآية التالية
function goToNextVerse() {
  if (currentIndex < quranData.length - 1) {
      currentIndex++;
      updateVerse();
  }
}

// دالة العودة للآية السابقة
function goToPrevVerse() {
  if (currentIndex > 0) {
      currentIndex--;
      updateVerse();
  }
}

// تشغيل الدالة لأول مرة تلقائياً عند فتح التطبيق
updateVerse();
