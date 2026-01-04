import { LessonPlanData } from '../types/LessonPlan';

export async function exportToPDF(element: HTMLElement, filename: string): Promise<void> {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow pop-ups to export to PDF');
    return;
  }

  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join('\n');
      } catch (e) {
        return '';
      }
    })
    .join('\n');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          ${styles}
          body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          @media print {
            body {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        ${element.innerHTML}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 100);
          }
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}

export function exportToWord(data: LessonPlanData): void {
  const htmlContent = generateWordHTML(data);

  const blob = new Blob([htmlContent], {
    type: 'application/vnd.ms-word',
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = '5E_Lesson_Plan.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function generateWordHTML(data: LessonPlanData): string {
  return `
<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
<head>
  <meta charset="utf-8">
  <title>5E Lesson Plan</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
    }
    h1 {
      text-align: center;
      font-size: 16pt;
      font-weight: bold;
      margin-bottom: 12pt;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    td {
      border: 1pt solid #000;
      padding: 8pt;
      vertical-align: top;
    }
    .header-cell {
      background-color: #f0f0f0;
      font-weight: bold;
    }
    .section-label {
      font-weight: bold;
      margin-bottom: 4pt;
    }
    .prompt-text {
      font-size: 9pt;
      color: #666;
      margin-bottom: 8pt;
    }
    .content {
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <h1>5E Lesson Plan</h1>

  <table>
    <tr>
      <td class="header-cell" width="50%">Teacher: ${data.teacher}</td>
      <td class="header-cell" width="50%">Number of Students: ${data.numberOfStudents}</td>
    </tr>
    <tr>
      <td class="header-cell">Date: ${data.date}</td>
      <td class="header-cell">Subject: ${data.subject}</td>
    </tr>
    <tr>
      <td colspan="2" class="header-cell">Grade level: ${data.gradeLevel}</td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">Materials:</div>
        <div class="content">${data.materials || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">Technology:</div>
        <div class="content">${data.technology || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="header-cell">Curriculum: ${data.curriculum}</td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">Lesson Aim(s):</div>
        <div class="content">${data.lessonAims || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">Lesson objective(s):</div>
        <div class="content">${data.lessonObjectives || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">Differentiation strategies to meet diverse learner needs:</div>
        <div class="content">${data.differentiation || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">ENGAGEMENT</div>
        <div class="prompt-text">
          Describe how the teacher will capture students' interest.<br>
          What kind of questions should the students ask themselves after the engagement?
        </div>
        <div class="content">${data.engagement || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">EXPLORATION</div>
        <div class="prompt-text">
          Describe what hands-on/minds-on activities students will be doing.<br>
          List "big idea" conceptual questions the teacher will use to encourage and/or focus students' exploration
        </div>
        <div class="content">${data.exploration || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">EXPLANATION</div>
        <div class="prompt-text">
          Student explanations should precede introduction of terms or explanations by the teacher. What questions or techniques will the teacher use to help students connect their exploration to the concept under examination?<br>
          List higher order thinking questions which teachers will use to solicit student explanations and help them to justify their explanations.
        </div>
        <div class="content">${data.explanation || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">ELABORATION</div>
        <div class="prompt-text">
          Describe how students will develop a more sophisticated understanding of the concept.<br>
          What vocabulary will be introduced and how will it connect to students' observations?<br>
          How is this knowledge applied in our daily lives?
        </div>
        <div class="content">${data.elaboration || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">EVALUATION</div>
        <div class="prompt-text">
          How will students demonstrate that they have achieved the lesson objective?<br>
          This should be embedded throughout the lesson as well as at the end of the lesson
        </div>
        <div class="content">${data.evaluation || ''}</div>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="section-label">REFLECTION (Teacher)</div>
        <div class="content">${data.reflection || ''}</div>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
