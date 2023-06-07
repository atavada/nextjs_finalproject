
import fs from "fs";
import matter from "gray-matter";

test('quizzes format is valid', () => {
    const files = fs.readdirSync("quizzes");
    files.map((fileName) => {
        const slug = fileName;
        const readFile = fs.readFileSync(`quizzes/${fileName}`, "utf-8");
        const json = JSON.parse(readFile);
        const metadata = json.metadata;

        // check if slug not JSON file name
        if (!slug.includes(".json")) {
            throw new Error(`Quizzes directory should contains only JSON file. Error at ${slug}`);
        }

        // check if file name is not contains space
        if (slug.includes(" ")) {
            throw new Error(`File name should not contains space. Error at ${slug}`);
        }

        const title = metadata.title;
        if (title === undefined || title === null || title === "") {
            throw new Error(`Title is undefined in ${slug}`);
        }

        const description = metadata.description;
        if (description === undefined || description === null || description === "") {
            throw new Error(`Description is undefined in ${slug}`);
        }

        const thumbnail = metadata.thumbnail;
        if (thumbnail === undefined || thumbnail === null || thumbnail === "") {
            throw new Error(`Thumbnail is undefined in ${slug}`);
        }

        const author = metadata.author;
        if (author === undefined || author === null || author === "") {
            throw new Error(`Author is undefined in ${slug}`);
        }

        const uuid = metadata.uuid;
        if (uuid === undefined || uuid === null || uuid === "") {
            throw new Error(`UUID is undefined on file ${slug}`);
        }

        const date = metadata.date;
        if (date === undefined || date === null || date === "") {
            throw new Error(`Date is undefined in ${slug}`);
        }

        const tags = metadata.tags;
        if (tags === undefined || tags === null || tags === "") {
            throw new Error(`Tags is undefined in ${slug}`);
        }
        
        json.questions.map((question) => {
            const questionText = question.question;
            const uuid = question.uuid;

            if (uuid === undefined || uuid === null || uuid === "") {
                throw new Error(`UUID is undefined single question in ${slug}`);
            }

            if (questionText === undefined || questionText === null || questionText === "") {
                throw new Error(`Question text is undefined in ${slug}`);
            }

            var countAnswer = 0;
            var isCorrect = false;

            question.options.map((options) => {
                const optionText = options.answer;
                if (optionText === undefined || optionText === null || optionText === "") {
                    throw new Error(`Option text is undefined in ${slug}`);
                }
                countAnswer += 1;

                const isCorrectAnswer = options.isCorrect;
                if (isCorrectAnswer) {
                    if (!isCorrect) {
                        isCorrect = true;
                    } else {
                        throw new Error(`Question should have only 1 correct answer in ${slug}`);
                    }
                }
            });

            if (countAnswer != 4) {
                throw new Error(`Question should have 4 options in ${slug}`);
            }

            if (!isCorrect) {
                throw new Error(`Question should have minimum 1 correct answer in ${slug}`);
            }
        });
    });
});


test('blog markdown format is valid', () => {
    const files = fs.readdirSync("posts");

    files.map((fileName) => {
        const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);
        
        // check if slug not markdown file name
        if (!fileName.includes(".md")) {
            throw new Error(`Posts directory should contains only markdown file. Error at ${fileName}`);
        }

        // check if file name is not contains space
        if (fileName.includes(" ")) {
            throw new Error(`File name should not contains space. Error at ${fileName}`);
        }

        const title = frontmatter.title;
        if (title === undefined || title === null || title === "") {
            throw new Error(`Title is undefined in ${fileName}`);
        }

        const date = frontmatter.date;
        if (date === undefined || date === null || date === "") {
            throw new Error(`Date is undefined in ${fileName}`);
        }

        const excerpt = frontmatter.excerpt;
        if (excerpt === undefined || excerpt === null || excerpt === "") {
            throw new Error(`Excerpt is undefined in ${fileName}`);
        }

        const tags = frontmatter.tags;
        if (tags === undefined || tags === null || tags === "") {
            throw new Error(`Tags is undefined in ${fileName}`);
        }

    });
});