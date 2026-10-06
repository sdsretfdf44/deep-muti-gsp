export interface HealthArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  lastReviewed: string;
  author: string;
  reviewedBy?: string;
  content: string;
}

export const healthArticles: HealthArticle[] = [
  {
    slug: "what-is-general-medicine",
    title: "What Is General Medicine?",
    excerpt:
      "General Medicine covers the diagnosis and non-surgical management of adult health concerns. Understand what a general physician does and when to consult one.",
    category: "General Medicine",
    readTime: "4 min read",
    publishedDate: "2026-01-15",
    lastReviewed: "2026-01-15",
    author: "Hospital Editorial Team",
    content: `
General Medicine is the branch of medicine focused on the assessment, diagnosis and non-surgical management of adult health conditions. A general physician is often the first point of contact when you are unwell, need a routine check-up, or are managing long-term conditions.

## What does a general physician do?

A general physician evaluates your symptoms, reviews your medical history, examines you and may recommend tests to reach a diagnosis. They can manage many common conditions themselves and refer you to a specialist when your condition requires focused expertise.

## When should you consult a general physician?

- Persistent or recurrent symptoms such as fever, cough, weakness or pain
- Ongoing management of conditions such as high blood pressure, diabetes or thyroid concerns
- Routine health check-ups
- Unclear symptoms where you're not sure which specialist to consult

## What to expect at your consultation

Your general physician will ask about your symptoms, examine you, and discuss possible causes. They may recommend blood tests, imaging or other investigations if needed, and will explain what the next steps look like.

If you have any doubts about a symptom, seeking timely medical advice is usually the safest approach.
    `.trim(),
  },
  {
    slug: "when-to-see-a-general-physician",
    title: "When Should You See a General Physician?",
    excerpt:
      "A practical guide to recognising when a symptom needs medical attention and when a general physician is the right starting point.",
    category: "General Medicine",
    readTime: "3 min read",
    publishedDate: "2026-01-18",
    lastReviewed: "2026-01-18",
    author: "Hospital Editorial Team",
    content: `
Many symptoms are minor and settle on their own. Others benefit from timely medical attention. Knowing when to see a general physician helps you make sensible decisions about your health.

## Symptoms that usually warrant a consultation

- Fever lasting more than 2–3 days, or high fever with chills
- A cough that persists beyond 2 weeks
- Unexplained weight loss or persistent tiredness
- New or worsening chest discomfort, breathlessness or palpitations
- Persistent headache, dizziness or changes in vision
- Digestive symptoms that don't settle, or blood in stool
- Concerns about blood pressure, blood sugar or thyroid function

## When to seek urgent care

Some symptoms need immediate medical attention rather than a routine consultation — for example severe chest pain, sudden weakness on one side of the body, difficulty breathing, heavy bleeding, or a serious injury. In those situations, contact local emergency medical services or go directly to a hospital.

## The value of a routine check-up

A routine check-up is a chance to review your general health, screen for common conditions and discuss preventive steps. It's especially valuable if you have a family history of long-term conditions.
    `.trim(),
  },
  {
    slug: "understanding-blood-pressure",
    title: "Understanding Blood Pressure",
    excerpt:
      "What blood pressure means, why it matters and how simple lifestyle changes can support healthy blood pressure.",
    category: "Preventive Health",
    readTime: "5 min read",
    publishedDate: "2026-01-22",
    lastReviewed: "2026-01-22",
    author: "Hospital Editorial Team",
    content: `
Blood pressure is the force exerted by circulating blood against the walls of your arteries. It is measured in two numbers: systolic (the higher number, when the heart contracts) over diastolic (the lower number, when the heart rests between beats).

## Why blood pressure matters

Consistently raised blood pressure — often called hypertension — can, over time, place strain on the heart and blood vessels. Because it usually has no symptoms, many people are unaware they have it. Periodic checks are the simplest way to know where you stand.

## Lifestyle steps that support healthy blood pressure

- Reduce added salt in your diet
- Include more fruit, vegetables and whole grains
- Maintain a healthy weight
- Be physically active most days of the week
- Limit alcohol and avoid tobacco
- Manage stress through rest, sleep and relaxation

## When to seek advice

If your readings are consistently raised, or if you have symptoms such as persistent headaches, chest discomfort or breathlessness, consult a general physician. They can advise on next steps and, if needed, treatment.

Blood pressure management is a long-term relationship — small consistent changes make a meaningful difference.
    `.trim(),
  },
  {
    slug: "understanding-diabetes",
    title: "Understanding Diabetes",
    excerpt:
      "A plain-language overview of diabetes, its common types, warning signs, and everyday habits that support blood sugar control.",
    category: "Preventive Health",
    readTime: "5 min read",
    publishedDate: "2026-01-25",
    lastReviewed: "2026-01-25",
    author: "Hospital Editorial Team",
    content: `
Diabetes is a condition in which the body has difficulty regulating blood sugar (glucose) levels. Left unmanaged, consistently high blood sugar can affect many parts of the body over time.

## Common warning signs

- Increased thirst and frequent urination
- Unexplained tiredness
- Slow-healing wounds
- Blurred vision
- Unintended weight loss

Not everyone with diabetes has obvious symptoms — routine screening is important, especially if you have a family history.

## Everyday habits that help

- Choose balanced meals with whole grains, vegetables and protein
- Limit sugary drinks and highly processed foods
- Be active for at least 30 minutes most days
- Sleep well and manage stress
- Attend follow-ups and take medications as advised

## Why professional guidance matters

Diabetes care is personal. A general physician can help you understand your numbers, plan a suitable routine and coordinate with specialists when required.
    `.trim(),
  },
  {
    slug: "common-causes-of-fever",
    title: "Common Causes of Fever",
    excerpt:
      "Fever is the body's response to many different conditions. Learn the common causes and when a fever needs medical attention.",
    category: "General Health",
    readTime: "4 min read",
    publishedDate: "2026-01-28",
    lastReviewed: "2026-01-28",
    author: "Hospital Editorial Team",
    content: `
Fever is a rise in body temperature above the normal range, and it usually means your body is responding to something — most often an infection.

## Common causes

- Viral infections such as the common cold or seasonal flu
- Bacterial infections such as urinary tract or throat infections
- Food-related infections
- Vector-borne illnesses in certain regions or seasons

## What to do at home

- Rest, and drink enough fluids
- Dress lightly and keep the room comfortable
- Take temperature readings at reasonable intervals
- Take fever medication only as advised

## When to consult a doctor

- Fever lasting more than 2–3 days
- Very high temperature, especially with chills
- Fever with rash, breathlessness, severe headache, persistent vomiting or reduced urine output
- Fever in infants, older adults or anyone with a long-term health condition

Timely medical advice helps identify the underlying cause and start appropriate treatment early.
    `.trim(),
  },
  {
    slug: "preventive-health-checkups",
    title: "The Value of Preventive Health Check-ups",
    excerpt:
      "A short guide to why regular health check-ups matter and what a basic check-up typically covers.",
    category: "Preventive Health",
    readTime: "3 min read",
    publishedDate: "2026-02-02",
    lastReviewed: "2026-02-02",
    author: "Hospital Editorial Team",
    content: `
Preventive health check-ups are an opportunity to review your general health, screen for common conditions and discuss steps to stay well.

## Why they matter

Many long-term conditions — such as high blood pressure, diabetes and thyroid disorders — develop quietly. Regular check-ups help identify these early, when they are usually easier to manage.

## What a basic check-up may include

- Height, weight and blood pressure
- Basic blood tests such as blood sugar and lipid profile
- A review of your medical and family history
- A conversation about diet, activity, sleep and lifestyle

## Who should consider a check-up

Adults, especially those with a family history of long-term conditions or those over 30, can benefit from periodic check-ups. Your general physician can recommend how often is right for you.

Prevention is often gentler and more effective than treatment — small, regular check-ins with your health are a worthwhile habit.
    `.trim(),
  },
  {
    slug: "healthy-lifestyle-basics",
    title: "Healthy Lifestyle Basics",
    excerpt:
      "Simple, sustainable daily habits that support long-term health and well-being.",
    category: "Wellness",
    readTime: "3 min read",
    publishedDate: "2026-02-06",
    lastReviewed: "2026-02-06",
    author: "Hospital Editorial Team",
    content: `
A healthy lifestyle isn't about perfection. It's about consistent, sustainable habits that support your body over time.

## Nutrition

- Include a variety of vegetables, fruit and whole grains
- Choose home-cooked meals when possible
- Limit added sugar, deep-fried foods and highly processed items
- Stay hydrated through the day

## Movement

- Aim for at least 30 minutes of moderate activity most days
- Include some strength or resistance work each week
- Break up long periods of sitting

## Rest and stress

- Prioritise 7–9 hours of sleep for most adults
- Build in short breaks through the day
- Talk to someone you trust when things feel overwhelming

## Regular check-ins

- Know your key numbers — blood pressure, blood sugar and weight
- See a general physician for routine reviews
- Act early on symptoms that persist

Small daily choices, held together over months and years, are the foundation of long-term health.
    `.trim(),
  },
];

export function getArticle(slug: string): HealthArticle | undefined {
  return healthArticles.find((a) => a.slug === slug);
}
