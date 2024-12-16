interface Enviroment {
    PORT: number;
    URI: string;
    META_ACCESS_TOKEN: string;
    META_PHONE_NUMBER_ID: number;
    META_API_URL: string;
    OPENAI_API_KEY: string;
}
export const enviroment: Enviroment = {
    PORT: parseInt(<string>process.env.PORT, 10) || 8080,
    URI: process.env.URI || '',
    META_ACCESS_TOKEN: process.env.META_ACCESS_TOKEN || '',
    META_PHONE_NUMBER_ID: 543884328432,
    META_API_URL: process.env.META_API_URL || '',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'EAAIDSOODJlEBOZCy1NaDtu1xJquVGYo7NrgypN0XuePCXqwDrs921pjgpQleZAJeDmWV8twqZCl3AIqTORCUkl1Tmt7W2ZCHuIbSwi9MrD1wTCzSsRHGaLb3gsTvUZBHZAxC5UZB4vtJbAiGf0ihsF1AEXUbcnr3jyMN0Mi0q6n9K8kQo55UOpBCBY2Qhi7baPxZAbsuMR8rHi7nOCbNg3a8WRWmXe84x3XcSLYZD'

}