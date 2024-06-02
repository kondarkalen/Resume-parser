# Automated Resume Parsing and Candidate Evaluation System

## Project Overview

In today's competitive job market, efficiently and accurately matching candidates with job requirements is essential for both employers and job seekers. Our project aims to develop a sophisticated resume parsing system accessible through a website designed to assess candidate eligibility for job positions. This system will analyze resumes and evaluate candidates based on their alignment with the specified job requirements. The evaluation will be quantified through a scoring mechanism that objectively measures the degree of match between the candidate’s qualifications and the job criteria.

## Key Features

- **Resume Parsing:** Automatically extract relevant information from resumes such as education, experience, skills, and certifications.
- **Job Requirement Matching:** Compare the extracted resume data with job requirements to determine eligibility.
- **Scoring Mechanism:** Calculate a score that represents the alignment between the candidate’s profile and the job requirements.
- **Automated Eligibility Assessment:** Provide a clear and concise evaluation of each candidate’s suitability for the position.
- **Front-End Interface:** An intuitive web interface built using HTML, CSS, and JavaScript allows users to upload resumes and job descriptions for analysis.

**NOTE:** The resumes used in the dataset which have been used for training are real life documents and have been procured with consent of the owners of the resume document and we cannot provide it to be used publicly.

## Implementation Details

### Library Imports
To start the project, we import essential libraries such as `spaCy` for natural language processing (NLP) task.

### Loading and Setting Up the Pipeline
We set up an NLP pipeline using spaCy, customized to extract key entities from resumes. This pipeline is trained to recognize education, experience, skills, and other relevant details.

### Data Extraction and Score Calculation
- We implemented methods to extract structured data from unstructured resume content. The extracted data is then compared against the predefined Job Requirements to calculate a compatibility score. 
- The model is capable of handling multiple types of input such as .pdf, .docx, .txt.

#### Data Extraction Methods
- We process the resumes using NLP techniques, we accurately extract and categorize information from resumes. 
- This includes identifying specific skills, years of experience, educational background, and certifications.
- Matches extracted skills with job requirements.

#### Scoring Methods
- The scoring algorithm weighs the extracted resume data against the job criteria to produce a final score. 
- This involves calculating the relevance of each data point and summing these to give an overall match score. 
- This score will be then be used to rank the resumes with others if required. 
- Through this filtering process, the user can see if the candidate is eligible enough to be considered for the hiring process.

## Output:
The Generating Candidate Details function formats the results into a readable table.
Displays candidate name, score, satisfied required skills, satisfied additional skills, not satisfied required skills, and not satisfied additional skills.

![Output Screenshot](https://github.com/kondarkalen/Resume-parser/blob/main/ss/Screenshot%202024-06-03%20004240.png)

## Technologies Used

- **Programming Languages:** Python
- **NLP Libraries:** spaCy
- **Front-End** HTML,CSS,JavaScript

## Future Enhancements

- **Integration with Job Portals:** Directly pull job descriptions and candidate resumes from popular job portals.
- **Advanced Analytics:** Implement machine learning models to predict candidate success in specific roles.
- **User Experience** Provide the best UI experience to our users accessing through website.

## Conclusion

Our automated resume parsing and candidate evaluation system aims to revolutionize the hiring process by providing a reliable and efficient tool for matching candidates with job requirements. By leveraging advanced technologies and methodologies, we strive to enhance the recruitment experience for both employers and job seekers.

Stay tuned for more updates as we progress with our project!

---

*For more information, visit our [GitHub repository](https://github.com/kondarkalen/Resume-parser).*
