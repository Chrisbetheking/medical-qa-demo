const STORAGE_KEYS = {
  language: "medicalQaDemoLanguage",
  history: "medicalQaDemoHistory"
};

let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || "zh";
let latestResult = null;

const translations = {
  zh: {
    "nav.brand": "医疗健康信息检索 Demo",
    "nav.demo": "Demo",
    "nav.evaluation": "Evaluation",
    "nav.safety": "Safety Boundary",
    "nav.github": "GitHub",
    "hero.eyebrow": "Health Information Retrieval Demo",
    "hero.title": "医疗健康信息检索 Demo",
    "hero.subtitle": "基于关键词匹配和结构化结果展示的健康信息检索前端项目。",
    "hero.note": "本页面用于展示基础文本处理、症状关键词匹配、健康信息检索和风险提醒逻辑。该 Demo 不提供医学诊断、处方或治疗方案，不能替代医生或专业医疗机构。",
    "hero.start": "开始测试",
    "hero.safetyLink": "查看安全边界",
    "hero.cardTitle": "前端规则模拟",
    "hero.cardText": "无需后端、无需 API Key，可直接部署到 GitHub Pages。",
    "hero.cardPoint1": "关键词匹配",
    "hero.cardPoint2": "风险提醒",
    "hero.cardPoint3": "结构化结果",
    "demo.eyebrow": "Interactive Demo",
    "demo.title": "Demo 输入区",
    "demo.description": "填写或选择一个样例，系统会基于本地健康知识库进行关键词匹配和风险信号检测。",
    "form.title": "输入配置",
    "form.symptomLabel": "症状描述",
    "form.symptomPlaceholder": "例如：发热两天，伴随咳嗽和喉咙痛。",
    "form.durationLabel": "持续时间",
    "form.durationDefault": "请选择",
    "form.duration1": "少于 24 小时",
    "form.duration2": "1-3 天",
    "form.duration3": "超过 3 天",
    "form.duration4": "超过 1 周",
    "form.ageLabel": "年龄段",
    "form.ageDefault": "请选择",
    "form.age1": "儿童",
    "form.age2": "青少年",
    "form.age3": "成人",
    "form.age4": "老年人",
    "form.riskLabel": "是否有高风险信号",
    "form.notesLabel": "备注",
    "form.notesPlaceholder": "可补充近期变化、是否加重、是否有其他不适。",
    "riskSignal.chestPain": "胸痛",
    "riskSignal.breathingDifficulty": "呼吸困难",
    "riskSignal.abnormalConsciousness": "意识异常",
    "riskSignal.persistentHighFever": "持续高热",
    "riskSignal.severeAllergy": "严重过敏",
    "buttons.analyze": "分析",
    "buttons.copy": "复制结果",
    "buttons.reset": "清空表单",
    "samples.title": "示例输入",
    "samples.description": "点击样例按钮可自动填充表单，方便快速测试。",
    "samples.feverCough": "发热咳嗽样例",
    "samples.abdominalPain": "腹痛恶心样例",
    "samples.chestPain": "胸痛风险样例",
    "samples.allergyRash": "过敏皮疹样例",
    "samples.headacheFatigue": "头痛疲劳样例",
    "results.title": "结果模块",
    "results.description": "结构化展示匹配关键词、相关健康信息、风险等级和下一步动作。",
    "results.waiting": "等待输入",
    "results.empty": "填写任意信息后点击“分析”，这里会显示结构化结果。",
    "results.matchedKeywords": "匹配关键词",
    "results.relatedInfo": "相关健康信息",
    "results.riskLevel": "风险等级",
    "results.riskReminder": "风险提醒",
    "results.careSuggestion": "是否建议就医",
    "results.nextActions": "下一步动作",
    "results.safetyBoundary": "公开安全边界说明",
    "results.noMatch": "未匹配到明确关键词",
    "results.noMatchDetail": "当前输入未命中本地健康知识库。请继续记录症状变化和持续时间；如果不适持续、加重，或出现高风险信号，应及时联系医生或当地急救服务。",
    "results.matchedEntry": "对应健康信息条目",
    "results.keyword": "关键词",
    "results.possibleContext": "可能相关背景",
    "results.riskSignals": "需关注的风险信号",
    "risk.low": "Low（低）",
    "risk.medium": "Medium（中）",
    "risk.high": "High（高）",
    "risk.lowReminder": "当前输入未检测到高风险信号。请继续观察变化，并记录持续时间。",
    "risk.mediumReminder": "匹配到多个普通症状信息。建议关注变化趋势，如持续不适或加重，请咨询医生或专业医疗机构。",
    "risk.highReminder": "请尽快联系医生或当地急救服务。本 Demo 不能判断病因，也不能替代医疗诊断。",
    "care.low": "可先记录症状、持续时间和变化情况。若持续不适或出现新的风险信号，请咨询医生或专业医疗机构。",
    "care.medium": "建议根据持续时间、年龄段和症状变化，咨询医生或专业医疗机构获取进一步帮助。",
    "care.high": "高风险信号需要优先处理。请尽快联系医生或当地急救服务。",
    "actions.record": "记录症状和持续时间",
    "actions.watch": "关注是否出现高风险信号",
    "actions.consult": "咨询医生或专业医疗机构",
    "actions.urgent": "高风险情况及时就医",
    "safety.public": "本 Demo 不提供诊断，不提供处方，不提供治疗方案，不能替代医生。高风险情况应及时就医。",
    "history.title": "历史记录",
    "history.description": "历史记录保存在浏览器 localStorage 中，刷新页面后仍会保留。",
    "history.clear": "清空历史记录",
    "history.empty": "暂无历史记录。",
    "history.risk": "风险等级",
    "evaluation.title": "测试说明",
    "evaluation.item1": "自建测试样例：20 条",
    "evaluation.item2": "关键词匹配准确率：约 80%",
    "evaluation.item3": "高风险提示覆盖：胸痛、呼吸困难、意识异常、持续高热、严重过敏",
    "evaluation.item4": "测试结果仅用于说明 Demo 的文本匹配效果，不代表医学准确性",
    "safety.title": "安全边界说明",
    "safety.body": "本项目为公开前端 Demo，仅用于展示文本处理、关键词匹配、健康信息检索和风险提醒。页面内容不构成医学诊断、处方或治疗建议，不能替代医生或专业医疗机构。若出现胸痛、呼吸困难、意识异常、严重过敏、持续高热等高风险情况，应及时联系医生或当地急救服务。",
    "footer.text": "医疗健康信息检索 Demo · 仅用于前端作品展示和健康信息检索流程演示",
    "toast.copied": "结果已复制。",
    "toast.noResult": "请先分析后再复制结果。",
    "toast.reset": "表单已清空。",
    "toast.sampleLoaded": "样例已填充。",
    "toast.historyCleared": "历史记录已清空。"
  },
  en: {
    "nav.brand": "Health Information Retrieval Demo",
    "nav.demo": "Demo",
    "nav.evaluation": "Evaluation",
    "nav.safety": "Safety Boundary",
    "nav.github": "GitHub",
    "hero.eyebrow": "Health Information Retrieval Demo",
    "hero.title": "Health Information Retrieval Demo",
    "hero.subtitle": "A front-end health information retrieval demo based on keyword matching and structured result display.",
    "hero.note": "This demo is used to demonstrate basic text processing, symptom keyword matching, health information retrieval, and risk reminder logic. It does not provide medical diagnosis, prescriptions, or treatment plans, and cannot replace doctors or professional medical institutions.",
    "hero.start": "Try the Demo",
    "hero.safetyLink": "View Safety Boundary",
    "hero.cardTitle": "Front-end Rule Simulation",
    "hero.cardText": "No backend, no API key, and ready for GitHub Pages deployment.",
    "hero.cardPoint1": "Keyword matching",
    "hero.cardPoint2": "Risk reminders",
    "hero.cardPoint3": "Structured results",
    "demo.eyebrow": "Interactive Demo",
    "demo.title": "Demo Input Area",
    "demo.description": "Fill in the form or choose a sample. The system matches keywords and checks risk signals using a local health information library.",
    "form.title": "Input Configuration",
    "form.symptomLabel": "Symptom Description",
    "form.symptomPlaceholder": "Example: Fever for two days with cough and sore throat.",
    "form.durationLabel": "Duration",
    "form.durationDefault": "Please select",
    "form.duration1": "Less than 24 hours",
    "form.duration2": "1-3 days",
    "form.duration3": "More than 3 days",
    "form.duration4": "More than 1 week",
    "form.ageLabel": "Age Group",
    "form.ageDefault": "Please select",
    "form.age1": "Child",
    "form.age2": "Teenager",
    "form.age3": "Adult",
    "form.age4": "Older adult",
    "form.riskLabel": "Risk Signals",
    "form.notesLabel": "Notes",
    "form.notesPlaceholder": "Add recent changes, worsening signs, or other discomfort.",
    "riskSignal.chestPain": "Chest pain",
    "riskSignal.breathingDifficulty": "Breathing difficulty",
    "riskSignal.abnormalConsciousness": "Abnormal consciousness",
    "riskSignal.persistentHighFever": "Persistent high fever",
    "riskSignal.severeAllergy": "Severe allergic reaction",
    "buttons.analyze": "Analyze",
    "buttons.copy": "Copy Result",
    "buttons.reset": "Reset",
    "samples.title": "Example Inputs",
    "samples.description": "Click a sample button to auto-fill the form for quick testing.",
    "samples.feverCough": "Fever & Cough Sample",
    "samples.abdominalPain": "Abdominal Pain Sample",
    "samples.chestPain": "Chest Pain Risk Sample",
    "samples.allergyRash": "Allergy Rash Sample",
    "samples.headacheFatigue": "Headache & Fatigue Sample",
    "results.title": "Result Module",
    "results.description": "Structured display of matched keywords, related health information, risk level, and next actions.",
    "results.waiting": "Waiting for input",
    "results.empty": "Enter any information and click “Analyze” to show structured results here.",
    "results.matchedKeywords": "Matched Keywords",
    "results.relatedInfo": "Related Health Information",
    "results.riskLevel": "Risk Level",
    "results.riskReminder": "Risk Reminder",
    "results.careSuggestion": "Care-seeking Suggestion",
    "results.nextActions": "Next Actions",
    "results.safetyBoundary": "Public Safety Boundary",
    "results.noMatch": "No clear keyword matched",
    "results.noMatchDetail": "The current input did not match the local health information library. Please keep recording symptoms and duration. If discomfort continues, worsens, or any risk signal appears, contact a doctor or local emergency service promptly.",
    "results.matchedEntry": "Matched health information entry",
    "results.keyword": "Keyword",
    "results.possibleContext": "Possible context",
    "results.riskSignals": "Risk signals to watch",
    "risk.low": "Low",
    "risk.medium": "Medium",
    "risk.high": "High",
    "risk.lowReminder": "No high-risk signal is detected in the current input. Please continue observing changes and recording duration.",
    "risk.mediumReminder": "Multiple ordinary symptom keywords were matched. Please monitor changes. If discomfort continues or worsens, consult a doctor or professional medical institution.",
    "risk.highReminder": "Please contact a doctor or local emergency service as soon as possible. This demo cannot identify the cause and cannot replace medical diagnosis.",
    "care.low": "You may record symptoms, duration, and changes first. If discomfort continues or new risk signals appear, consult a doctor or professional medical institution.",
    "care.medium": "Based on duration, age group, and symptom changes, consider consulting a doctor or professional medical institution for further help.",
    "care.high": "High-risk signals should be handled with priority. Please contact a doctor or local emergency service as soon as possible.",
    "actions.record": "Record symptoms and duration",
    "actions.watch": "Watch for high-risk signals",
    "actions.consult": "Consult a doctor or professional medical institution",
    "actions.urgent": "Seek timely care in high-risk situations",
    "safety.public": "This demo does not provide diagnosis, prescriptions, or treatment plans, and cannot replace doctors. High-risk situations should receive timely care.",
    "history.title": "History",
    "history.description": "History is stored in browser localStorage and remains after refreshing the page.",
    "history.clear": "Clear History",
    "history.empty": "No history yet.",
    "history.risk": "Risk Level",
    "evaluation.title": "Evaluation Notes",
    "evaluation.item1": "Self-built test samples: 20",
    "evaluation.item2": "Keyword matching accuracy: around 80%",
    "evaluation.item3": "High-risk signal coverage: chest pain, breathing difficulty, abnormal consciousness, persistent high fever, severe allergic reaction",
    "evaluation.item4": "The evaluation only reflects demo keyword matching behavior, not medical accuracy.",
    "safety.title": "Safety Boundary",
    "safety.body": "This project is a public front-end demo for text processing, keyword matching, health information retrieval, and risk reminders. It does not provide medical diagnosis, prescriptions, or treatment plans and cannot replace doctors or professional medical institutions. If high-risk symptoms such as chest pain, breathing difficulty, abnormal consciousness, severe allergic reaction, or persistent high fever occur, users should contact a doctor or local emergency service promptly.",
    "footer.text": "Health Information Retrieval Demo · For front-end portfolio display and health information retrieval workflow demonstration only",
    "toast.copied": "Result copied.",
    "toast.noResult": "Please analyze first before copying the result.",
    "toast.reset": "Form reset.",
    "toast.sampleLoaded": "Sample loaded.",
    "toast.historyCleared": "History cleared."
  }
};

const healthKnowledgeBase = [
  {
    id: "fever",
    title: { zh: "发热", en: "Fever" },
    keywords: ["fever", "high temperature", "temperature", "发热", "发烧", "体温", "高热"],
    relatedInfo: {
      zh: "发热是常见健康信号，可能与感染、炎症反应、环境因素或身体状态变化有关。",
      en: "Fever is a common health signal that may be related to infection, inflammatory response, environmental factors, or changes in body condition."
    },
    possibleContext: {
      zh: "可结合持续时间、体温变化、是否伴随咳嗽、喉咙痛、乏力等信息进行记录。",
      en: "It can be recorded together with duration, temperature changes, and whether cough, sore throat, or fatigue appears."
    },
    riskSignals: {
      zh: "持续高热、精神状态明显改变、呼吸困难、儿童或老年人持续不适。",
      en: "Persistent high fever, obvious mental state change, breathing difficulty, or persistent discomfort in children or older adults."
    },
    careSuggestion: {
      zh: "如发热持续、反复或伴随高风险信号，请咨询医生或专业医疗机构。",
      en: "If fever continues, recurs, or appears with risk signals, consult a doctor or professional medical institution."
    },
    publicNote: {
      zh: "本条目仅为健康信息匹配结果，不代表医学判断。",
      en: "This entry is only a health information matching result and does not represent medical judgment."
    }
  },
  {
    id: "cough",
    title: { zh: "咳嗽", en: "Cough" },
    keywords: ["cough", "coughing", "咳嗽", "干咳", "咳痰"],
    relatedInfo: {
      zh: "咳嗽可能与上呼吸道不适、空气刺激、过敏反应或其他健康状态有关。",
      en: "Cough may be related to upper respiratory discomfort, air irritation, allergic reaction, or other health conditions."
    },
    possibleContext: {
      zh: "可记录是否干咳、是否有痰、是否伴随发热、喉咙痛或呼吸不适。",
      en: "Record whether it is dry cough, whether sputum is present, and whether fever, sore throat, or breathing discomfort appears."
    },
    riskSignals: {
      zh: "呼吸困难、胸痛、咯血、持续加重或影响日常活动。",
      en: "Breathing difficulty, chest pain, coughing blood, persistent worsening, or impact on daily activities."
    },
    careSuggestion: {
      zh: "如咳嗽持续加重、影响呼吸或伴随高风险信号，请及时联系医生。",
      en: "If cough worsens, affects breathing, or appears with risk signals, contact a doctor promptly."
    },
    publicNote: {
      zh: "本条目仅用于展示相关健康信息。",
      en: "This entry is only used to display related health information."
    }
  },
  {
    id: "headache",
    title: { zh: "头痛", en: "Headache" },
    keywords: ["headache", "head pain", "migraine", "头痛", "偏头痛", "头疼"],
    relatedInfo: {
      zh: "头痛可能与休息不足、压力、脱水、视觉疲劳或其他健康状态有关。",
      en: "Headache may be related to insufficient rest, stress, dehydration, visual fatigue, or other health conditions."
    },
    possibleContext: {
      zh: "可记录疼痛位置、持续时间、是否伴随头晕、恶心、视力变化或肢体无力。",
      en: "Record pain location, duration, and whether dizziness, nausea, vision change, or limb weakness appears."
    },
    riskSignals: {
      zh: "突发剧烈头痛、意识异常、肢体无力、言语不清或反复呕吐。",
      en: "Sudden severe headache, abnormal consciousness, limb weakness, unclear speech, or repeated vomiting."
    },
    careSuggestion: {
      zh: "如头痛突然剧烈、持续加重或伴随神经系统相关风险信号，请及时就医。",
      en: "If headache is sudden, severe, worsening, or appears with neurological risk signals, seek timely care."
    },
    publicNote: {
      zh: "本条目不用于判断头痛原因。",
      en: "This entry is not used to identify the cause of headache."
    }
  },
  {
    id: "abdominal-pain",
    title: { zh: "腹痛", en: "Abdominal Pain" },
    keywords: ["abdominal pain", "stomach pain", "belly pain", "腹痛", "肚子痛", "胃痛", "腹部疼痛"],
    relatedInfo: {
      zh: "腹痛可与饮食、胃肠道不适、压力、感染或其他健康因素有关。",
      en: "Abdominal pain may be related to diet, gastrointestinal discomfort, stress, infection, or other health factors."
    },
    possibleContext: {
      zh: "可记录疼痛位置、持续时间、是否伴随恶心、呕吐、腹泻、发热或加重趋势。",
      en: "Record pain location, duration, and whether nausea, vomiting, diarrhea, fever, or worsening trend appears."
    },
    riskSignals: {
      zh: "剧烈腹痛、持续加重、发热、血便、反复呕吐或无法正常进食饮水。",
      en: "Severe abdominal pain, persistent worsening, fever, bloody stool, repeated vomiting, or inability to eat or drink normally."
    },
    careSuggestion: {
      zh: "如腹痛剧烈、持续或伴随明显风险信号，请及时联系医生或当地急救服务。",
      en: "If abdominal pain is severe, persistent, or appears with obvious risk signals, contact a doctor or local emergency service promptly."
    },
    publicNote: {
      zh: "本条目仅为相关健康信息展示。",
      en: "This entry only displays related health information."
    }
  },
  {
    id: "nausea",
    title: { zh: "恶心", en: "Nausea" },
    keywords: ["nausea", "nauseous", "vomit", "vomiting", "恶心", "想吐", "呕吐"],
    relatedInfo: {
      zh: "恶心可能与饮食、胃肠道不适、晕动、压力或其他身体状态有关。",
      en: "Nausea may be related to diet, gastrointestinal discomfort, motion sickness, stress, or other body conditions."
    },
    possibleContext: {
      zh: "可记录是否呕吐、是否腹痛、是否头晕、是否影响进食饮水。",
      en: "Record whether vomiting, abdominal pain, dizziness, or impact on eating and drinking appears."
    },
    riskSignals: {
      zh: "持续呕吐、脱水迹象、剧烈腹痛、意识异常或无法饮水。",
      en: "Persistent vomiting, signs of dehydration, severe abdominal pain, abnormal consciousness, or inability to drink water."
    },
    careSuggestion: {
      zh: "如恶心呕吐持续、影响饮水或伴随高风险信号，请咨询医生。",
      en: "If nausea or vomiting continues, affects drinking, or appears with risk signals, consult a doctor."
    },
    publicNote: {
      zh: "本条目仅用于健康信息匹配。",
      en: "This entry is only used for health information matching."
    }
  },
  {
    id: "rash",
    title: { zh: "皮疹", en: "Rash" },
    keywords: ["rash", "skin rash", "hives", "皮疹", "红疹", "风团", "荨麻疹"],
    relatedInfo: {
      zh: "皮疹可能与接触刺激物、过敏、皮肤干燥、感染或环境变化有关。",
      en: "Rash may be related to contact irritants, allergy, dry skin, infection, or environmental changes."
    },
    possibleContext: {
      zh: "可记录皮疹范围、是否瘙痒、是否伴随发热、面唇肿胀或呼吸不适。",
      en: "Record rash area, itchiness, and whether fever, facial or lip swelling, or breathing discomfort appears."
    },
    riskSignals: {
      zh: "严重过敏、面唇肿胀、呼吸困难、快速扩散或伴随持续高热。",
      en: "Severe allergic reaction, facial or lip swelling, breathing difficulty, rapid spread, or persistent high fever."
    },
    careSuggestion: {
      zh: "如皮疹快速扩散或伴随呼吸不适、面唇肿胀，请尽快联系医生或急救服务。",
      en: "If rash spreads quickly or appears with breathing discomfort or facial/lip swelling, contact a doctor or emergency service as soon as possible."
    },
    publicNote: {
      zh: "本条目不用于判断皮疹类型。",
      en: "This entry is not used to determine rash type."
    }
  },
  {
    id: "allergy",
    title: { zh: "过敏", en: "Allergy" },
    keywords: ["allergy", "allergic", "allergic reaction", "过敏", "过敏反应", "瘙痒"],
    relatedInfo: {
      zh: "过敏相关不适可能与食物、药物、花粉、宠物、环境或接触物有关。",
      en: "Allergy-related discomfort may be related to food, medicine, pollen, pets, environment, or contact substances."
    },
    possibleContext: {
      zh: "可记录接触过的食物、药物、环境变化，以及是否出现皮疹、瘙痒、肿胀或呼吸不适。",
      en: "Record food, medicine, environmental changes, and whether rash, itching, swelling, or breathing discomfort appears."
    },
    riskSignals: {
      zh: "严重过敏、呼吸困难、面唇舌肿胀、意识异常或快速加重。",
      en: "Severe allergic reaction, breathing difficulty, face/lip/tongue swelling, abnormal consciousness, or rapid worsening."
    },
    careSuggestion: {
      zh: "如出现严重过敏相关风险信号，请尽快联系当地急救服务。",
      en: "If severe allergy-related risk signals appear, contact local emergency service as soon as possible."
    },
    publicNote: {
      zh: "本条目仅为相关健康信息，不替代专业判断。",
      en: "This entry is related health information only and does not replace professional judgment."
    }
  },
  {
    id: "chest-pain",
    title: { zh: "胸痛", en: "Chest Pain" },
    keywords: ["chest pain", "chest tightness", "胸痛", "胸闷", "胸口痛"],
    relatedInfo: {
      zh: "胸痛属于需要重点关注的风险信号，可能涉及多种身体系统。",
      en: "Chest pain is a risk signal that requires attention and may involve multiple body systems."
    },
    possibleContext: {
      zh: "可记录疼痛位置、持续时间、是否伴随呼吸困难、出汗、头晕或放射性疼痛。",
      en: "Record pain location, duration, and whether breathing difficulty, sweating, dizziness, or radiating pain appears."
    },
    riskSignals: {
      zh: "胸痛、胸闷伴随呼吸困难、晕厥、意识异常或持续加重。",
      en: "Chest pain or tightness with breathing difficulty, fainting, abnormal consciousness, or persistent worsening."
    },
    careSuggestion: {
      zh: "如出现胸痛或胸闷并伴随不适，请尽快联系医生或当地急救服务。",
      en: "If chest pain or tightness appears with discomfort, contact a doctor or local emergency service as soon as possible."
    },
    publicNote: {
      zh: "本条目仅用于风险提醒，不判断原因。",
      en: "This entry is only used for risk reminder and does not identify the cause."
    }
  },
  {
    id: "fatigue",
    title: { zh: "疲劳", en: "Fatigue" },
    keywords: ["fatigue", "tired", "weak", "疲劳", "乏力", "没精神", "虚弱"],
    relatedInfo: {
      zh: "疲劳可能与睡眠、压力、饮食、运动量、感染恢复期或其他健康状态有关。",
      en: "Fatigue may be related to sleep, stress, diet, activity level, recovery from infection, or other health conditions."
    },
    possibleContext: {
      zh: "可记录持续时间、是否影响日常活动、是否伴随发热、头晕或体重变化。",
      en: "Record duration, whether daily activities are affected, and whether fever, dizziness, or weight change appears."
    },
    riskSignals: {
      zh: "明显虚弱、意识异常、胸痛、呼吸困难或快速加重。",
      en: "Obvious weakness, abnormal consciousness, chest pain, breathing difficulty, or rapid worsening."
    },
    careSuggestion: {
      zh: "如疲劳持续影响生活或伴随高风险信号，请咨询医生或专业医疗机构。",
      en: "If fatigue continues to affect life or appears with risk signals, consult a doctor or professional medical institution."
    },
    publicNote: {
      zh: "本条目仅展示相关健康信息。",
      en: "This entry only displays related health information."
    }
  },
  {
    id: "sore-throat",
    title: { zh: "喉咙痛", en: "Sore Throat" },
    keywords: ["sore throat", "throat pain", "throat", "喉咙痛", "咽痛", "嗓子疼"],
    relatedInfo: {
      zh: "喉咙痛可能与上呼吸道不适、空气干燥、用嗓过度或环境刺激有关。",
      en: "Sore throat may be related to upper respiratory discomfort, dry air, voice overuse, or environmental irritation."
    },
    possibleContext: {
      zh: "可记录是否伴随发热、咳嗽、吞咽不适、皮疹或呼吸不适。",
      en: "Record whether fever, cough, swallowing discomfort, rash, or breathing discomfort appears."
    },
    riskSignals: {
      zh: "呼吸困难、吞咽明显困难、持续高热或快速加重。",
      en: "Breathing difficulty, obvious swallowing difficulty, persistent high fever, or rapid worsening."
    },
    careSuggestion: {
      zh: "如喉咙痛持续加重、伴随高热或呼吸不适，请咨询医生。",
      en: "If sore throat worsens, appears with high fever, or breathing discomfort occurs, consult a doctor."
    },
    publicNote: {
      zh: "本条目仅为信息展示。",
      en: "This entry is for information display only."
    }
  },
  {
    id: "breathing-difficulty",
    title: { zh: "呼吸困难", en: "Breathing Difficulty" },
    keywords: ["breathing difficulty", "shortness of breath", "difficulty breathing", "呼吸困难", "气短", "喘不上气", "喘息"],
    relatedInfo: {
      zh: "呼吸困难属于需要重点关注的高风险信号，应结合严重程度和伴随情况及时处理。",
      en: "Breathing difficulty is a high-risk signal that needs attention and should be handled promptly based on severity and accompanying conditions."
    },
    possibleContext: {
      zh: "可记录发生时间、是否与活动相关、是否伴随胸痛、发热、过敏或意识异常。",
      en: "Record when it occurs, whether it is activity-related, and whether chest pain, fever, allergy, or abnormal consciousness appears."
    },
    riskSignals: {
      zh: "呼吸困难本身即为高风险信号，尤其伴随胸痛、意识异常或严重过敏时。",
      en: "Breathing difficulty itself is a high-risk signal, especially with chest pain, abnormal consciousness, or severe allergic reaction."
    },
    careSuggestion: {
      zh: "如出现呼吸困难，请尽快联系医生或当地急救服务。",
      en: "If breathing difficulty appears, contact a doctor or local emergency service as soon as possible."
    },
    publicNote: {
      zh: "本条目仅用于风险提醒。",
      en: "This entry is only used for risk reminder."
    }
  },
  {
    id: "dizziness",
    title: { zh: "头晕", en: "Dizziness" },
    keywords: ["dizziness", "dizzy", "lightheaded", "fainting", "头晕", "眩晕", "昏厥", "晕厥"],
    relatedInfo: {
      zh: "头晕可能与疲劳、脱水、低血糖、姿势变化、压力或其他健康因素有关。",
      en: "Dizziness may be related to fatigue, dehydration, low blood sugar, posture change, stress, or other health factors."
    },
    possibleContext: {
      zh: "可记录是否站立时明显、是否伴随胸痛、呼吸困难、意识异常或跌倒。",
      en: "Record whether it is obvious when standing and whether chest pain, breathing difficulty, abnormal consciousness, or falls appear."
    },
    riskSignals: {
      zh: "严重头晕、昏厥、意识异常、胸痛、呼吸困难或肢体无力。",
      en: "Severe dizziness, fainting, abnormal consciousness, chest pain, breathing difficulty, or limb weakness."
    },
    careSuggestion: {
      zh: "如头晕严重、反复或伴随高风险信号，请及时联系医生或当地急救服务。",
      en: "If dizziness is severe, recurrent, or appears with risk signals, contact a doctor or local emergency service promptly."
    },
    publicNote: {
      zh: "本条目仅为健康信息匹配结果。",
      en: "This entry is only a health information matching result."
    }
  }
];

const highRiskKeywords = [
  "chest pain", "胸痛", "胸闷", "breathing difficulty", "difficulty breathing", "shortness of breath", "呼吸困难", "喘不上气",
  "loss of consciousness", "abnormal consciousness", "意识异常", "意识模糊", "昏迷",
  "severe allergic reaction", "严重过敏", "面唇肿胀", "舌头肿胀",
  "persistent high fever", "持续高热", "高热不退",
  "severe abdominal pain", "剧烈腹痛", "剧烈肚子痛",
  "fainting", "昏厥", "晕厥",
  "severe dizziness", "严重头晕"
];

const riskEntryIds = new Set(["chest-pain", "breathing-difficulty"]);

const samples = [
  {
    id: "feverCough",
    labelKey: "samples.feverCough",
    symptom: {
      zh: "发热两天，伴随咳嗽和喉咙痛，暂时没有胸痛或呼吸困难。",
      en: "Fever for two days with cough and sore throat, no chest pain or breathing difficulty for now."
    },
    duration: "one-to-three-days",
    age: "adult",
    risks: [],
    notes: {
      zh: "想了解相关健康信息和需要关注的风险信号。",
      en: "I want to check related health information and risk signals to watch."
    }
  },
  {
    id: "abdominalPain",
    labelKey: "samples.abdominalPain",
    symptom: {
      zh: "今天开始腹痛，有恶心感，暂时没有剧烈腹痛。",
      en: "Abdominal pain started today with nausea, no severe abdominal pain for now."
    },
    duration: "less-than-24h",
    age: "adult",
    risks: [],
    notes: {
      zh: "想记录一下持续时间和相关提示。",
      en: "I want to record duration and related reminders."
    }
  },
  {
    id: "chestPain",
    labelKey: "samples.chestPain",
    symptom: {
      zh: "出现胸痛和胸闷，并且有一点头晕。",
      en: "Chest pain and chest tightness appeared, with some dizziness."
    },
    duration: "less-than-24h",
    age: "adult",
    risks: ["chest pain"],
    notes: {
      zh: "这个样例用于测试高风险提示。",
      en: "This sample is used to test the high-risk reminder."
    }
  },
  {
    id: "allergyRash",
    labelKey: "samples.allergyRash",
    symptom: {
      zh: "皮肤出现红疹和瘙痒，怀疑和过敏有关，没有呼吸困难。",
      en: "Skin rash and itching appeared, possibly related to allergy, without breathing difficulty."
    },
    duration: "one-to-three-days",
    age: "adult",
    risks: [],
    notes: {
      zh: "想查看过敏和皮疹相关健康信息。",
      en: "I want to check allergy and rash related health information."
    }
  },
  {
    id: "headacheFatigue",
    labelKey: "samples.headacheFatigue",
    symptom: {
      zh: "最近头痛、疲劳、没精神，偶尔有轻微头晕。",
      en: "Recently I have headache, fatigue, low energy, and occasional mild dizziness."
    },
    duration: "more-than-three-days",
    age: "teen",
    risks: [],
    notes: {
      zh: "想了解可能相关背景和下一步记录方向。",
      en: "I want to understand possible context and what to record next."
    }
  }
];

function t(key) {
  return translations[currentLanguage][key] || translations.zh[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[，。！？；：、,.!?;:()[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesKeyword(normalizedText, keyword) {
  const normalizedKeyword = normalizeText(keyword);
  return normalizedText.includes(normalizedKeyword);
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem(STORAGE_KEYS.language, lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "医疗健康信息检索 Demo" : "Health Information Retrieval Demo";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", t(key));
  });

  document.getElementById("languageToggle").textContent = lang === "zh" ? "English" : "中文";
  renderSampleButtons();
  renderHistory();
  if (latestResult) {
    renderResults(latestResult);
  }
}

function getFormData() {
  return {
    symptomText: document.getElementById("symptomText").value.trim(),
    duration: document.getElementById("durationSelect").value,
    ageGroup: document.getElementById("ageGroup").value,
    riskSignals: Array.from(document.querySelectorAll('input[name="riskSignals"]:checked')).map((input) => input.value),
    notes: document.getElementById("notesText").value.trim()
  };
}

function analyzeInput(formData) {
  const combinedText = normalizeText(`${formData.symptomText} ${formData.notes} ${formData.riskSignals.join(" ")}`);
  const matchedEntries = [];
  const matchedKeywords = [];

  healthKnowledgeBase.forEach((entry) => {
    const entryMatchedKeywords = entry.keywords.filter((keyword) => includesKeyword(combinedText, keyword));
    if (entryMatchedKeywords.length > 0) {
      matchedEntries.push(entry);
      entryMatchedKeywords.forEach((keyword) => {
        matchedKeywords.push({ keyword, entryId: entry.id });
      });
    }
  });

  const detectedHighRiskKeywords = highRiskKeywords.filter((keyword) => includesKeyword(combinedText, keyword));
  const hasCheckedRiskSignal = formData.riskSignals.length > 0;
  const hasHighRiskEntry = matchedEntries.some((entry) => riskEntryIds.has(entry.id));

  let riskLevel = "low";
  if (detectedHighRiskKeywords.length > 0 || hasCheckedRiskSignal || hasHighRiskEntry) {
    riskLevel = "high";
  } else if (matchedEntries.length >= 2) {
    riskLevel = "medium";
  }

  return {
    formData,
    matchedEntryIds: matchedEntries.map((entry) => entry.id),
    matchedKeywords,
    detectedHighRiskKeywords,
    riskLevel,
    createdAt: new Date().toISOString()
  };
}

function getEntryById(id) {
  return healthKnowledgeBase.find((entry) => entry.id === id);
}

function riskClass(riskLevel) {
  return riskLevel === "high" ? "high" : riskLevel === "medium" ? "medium" : "low";
}

function renderResults(result) {
  const container = document.getElementById("resultsContainer");
  const status = document.getElementById("resultStatus");
  const entries = result.matchedEntryIds.map(getEntryById).filter(Boolean);
  const riskLevel = result.riskLevel;

  status.textContent = t(`risk.${riskLevel}`);
  status.className = `result-status ${riskClass(riskLevel)}`;
  container.className = "results-container";

  const keywordHtml = result.matchedKeywords.length > 0
    ? `<div class="keyword-list">${result.matchedKeywords.map((item) => {
        const entry = getEntryById(item.entryId);
        const entryTitle = entry ? entry.title[currentLanguage] : "";
        return `<span class="keyword-chip">${escapeHtml(item.keyword)} → ${escapeHtml(entryTitle)}</span>`;
      }).join("")}</div>`
    : `<p>${t("results.noMatch")}</p>`;

  const relatedHtml = entries.length > 0
    ? `<ul>${entries.map((entry) => `
        <li>
          <strong>${escapeHtml(entry.title[currentLanguage])}</strong><br />
          ${escapeHtml(entry.relatedInfo[currentLanguage])}<br />
          <span class="result-meta">${t("results.possibleContext")}: ${escapeHtml(entry.possibleContext[currentLanguage])}</span><br />
          <span class="result-meta">${t("results.riskSignals")}: ${escapeHtml(entry.riskSignals[currentLanguage])}</span>
        </li>`).join("")}</ul>`
    : `<p>${t("results.noMatchDetail")}</p>`;

  const careKey = riskLevel === "high" ? "care.high" : riskLevel === "medium" ? "care.medium" : "care.low";
  const riskReminderKey = riskLevel === "high" ? "risk.highReminder" : riskLevel === "medium" ? "risk.mediumReminder" : "risk.lowReminder";

  container.innerHTML = `
    <article class="result-block">
      <h4>${t("results.matchedKeywords")}</h4>
      ${keywordHtml}
    </article>

    <article class="result-block">
      <h4>${t("results.relatedInfo")}</h4>
      ${relatedHtml}
    </article>

    <article class="result-block">
      <h4>${t("results.riskLevel")}</h4>
      <span class="risk-badge ${riskClass(riskLevel)}">${t(`risk.${riskLevel}`)}</span>
    </article>

    <article class="result-block">
      <h4>${t("results.riskReminder")}</h4>
      <p>${t(riskReminderKey)}</p>
    </article>

    <article class="result-block">
      <h4>${t("results.careSuggestion")}</h4>
      <p>${t(careKey)}</p>
    </article>

    <article class="result-block">
      <h4>${t("results.nextActions")}</h4>
      <ul>
        <li>${t("actions.record")}</li>
        <li>${t("actions.watch")}</li>
        <li>${t("actions.consult")}</li>
        <li>${t("actions.urgent")}</li>
      </ul>
    </article>

    <article class="result-block">
      <h4>${t("results.safetyBoundary")}</h4>
      <p>${t("safety.public")}</p>
    </article>
  `;
}

function resultToText(result) {
  const entries = result.matchedEntryIds.map(getEntryById).filter(Boolean);
  const keywords = result.matchedKeywords.map((item) => item.keyword).join(", ") || t("results.noMatch");
  const related = entries.length > 0
    ? entries.map((entry) => `- ${entry.title[currentLanguage]}: ${entry.relatedInfo[currentLanguage]}`).join("\n")
    : `- ${t("results.noMatchDetail")}`;
  const riskLevel = t(`risk.${result.riskLevel}`);
  const riskReminderKey = result.riskLevel === "high" ? "risk.highReminder" : result.riskLevel === "medium" ? "risk.mediumReminder" : "risk.lowReminder";
  const careKey = result.riskLevel === "high" ? "care.high" : result.riskLevel === "medium" ? "care.medium" : "care.low";

  return [
    `${t("results.matchedKeywords")}: ${keywords}`,
    `${t("results.relatedInfo")}:`,
    related,
    `${t("results.riskLevel")}: ${riskLevel}`,
    `${t("results.riskReminder")}: ${t(riskReminderKey)}`,
    `${t("results.careSuggestion")}: ${t(careKey)}`,
    `${t("results.nextActions")}: ${t("actions.record")} / ${t("actions.watch")} / ${t("actions.consult")} / ${t("actions.urgent")}`,
    `${t("results.safetyBoundary")}: ${t("safety.public")}`
  ].join("\n");
}

function loadHistory() {
  try {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || "[]");
    return Array.isArray(history) ? history : [];
  } catch (error) {
    return [];
  }
}

function saveHistory(result) {
  const history = loadHistory();
  const summary = result.formData.symptomText || result.formData.notes || (currentLanguage === "zh" ? "未填写症状描述" : "No symptom description");
  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    summary: summary.slice(0, 90),
    riskLevel: result.riskLevel,
    matchedEntryIds: result.matchedEntryIds,
    createdAt: result.createdAt
  };
  const nextHistory = [item, ...history].slice(0, 12);
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(nextHistory));
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById("historyList");
  const history = loadHistory();

  if (history.length === 0) {
    historyList.innerHTML = `<div class="empty-state"><p>${t("history.empty")}</p></div>`;
    return;
  }

  historyList.innerHTML = history.map((item) => {
    const date = new Date(item.createdAt);
    const timeText = Number.isNaN(date.getTime()) ? "" : date.toLocaleString(currentLanguage === "zh" ? "zh-CN" : "en-US");
    return `
      <article class="history-item">
        <div>
          <div class="history-title">${escapeHtml(item.summary)}</div>
          <div class="history-meta">${escapeHtml(timeText)}</div>
        </div>
        <span class="risk-badge ${riskClass(item.riskLevel)}">${t("history.risk")}: ${t(`risk.${item.riskLevel}`)}</span>
      </article>
    `;
  }).join("");
}

function renderSampleButtons() {
  const sampleButtons = document.getElementById("sampleButtons");
  sampleButtons.innerHTML = samples.map((sample) => `
    <button class="sample-button" type="button" data-sample-id="${sample.id}">${t(sample.labelKey)}</button>
  `).join("");

  sampleButtons.querySelectorAll("[data-sample-id]").forEach((button) => {
    button.addEventListener("click", () => loadSample(button.getAttribute("data-sample-id")));
  });
}

function loadSample(sampleId) {
  const sample = samples.find((item) => item.id === sampleId);
  if (!sample) return;

  document.getElementById("symptomText").value = sample.symptom[currentLanguage];
  document.getElementById("durationSelect").value = sample.duration;
  document.getElementById("ageGroup").value = sample.age;
  document.getElementById("notesText").value = sample.notes[currentLanguage];
  document.querySelectorAll('input[name="riskSignals"]').forEach((input) => {
    input.checked = sample.risks.includes(input.value);
  });
  showToast(t("toast.sampleLoaded"));
}

function resetForm() {
  document.getElementById("qaForm").reset();
  latestResult = null;
  const status = document.getElementById("resultStatus");
  status.textContent = t("results.waiting");
  status.className = "result-status";
  document.getElementById("resultsContainer").className = "results-container empty-state";
  document.getElementById("resultsContainer").innerHTML = `<p>${t("results.empty")}</p>`;
  showToast(t("toast.reset"));
}

async function copyLatestResult() {
  if (!latestResult) {
    showToast(t("toast.noResult"));
    return;
  }

  const text = resultToText(latestResult);
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  showToast(t("toast.copied"));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function bindEvents() {
  document.getElementById("qaForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const result = analyzeInput(getFormData());
    latestResult = result;
    renderResults(result);
    saveHistory(result);
  });

  document.getElementById("languageToggle").addEventListener("click", () => {
    setLanguage(currentLanguage === "zh" ? "en" : "zh");
  });

  document.getElementById("copyResultButton").addEventListener("click", copyLatestResult);
  document.getElementById("resetButton").addEventListener("click", resetForm);

  document.getElementById("clearHistoryButton").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.history);
    renderHistory();
    showToast(t("toast.historyCleared"));
  });

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const navLinks = document.getElementById("navLinks");
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  bindEvents();
  setLanguage(currentLanguage);
}

init();
