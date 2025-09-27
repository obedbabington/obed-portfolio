import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Automatic Speech Recognition System for Asante Twi - Obed Allotey Babington",
    description: "Developed an ASR system for Asante Twi, a Ghanaian language with limited digital resources, achieving CER of 0.0714 and WER of 0.20 on curated test samples.",
    path: "/projects/cs-projects/automatic-speech-recognition-asante-twi",
    baseURL,
  });
}

export default function AutomaticSpeechRecognitionAsanteTwi() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/projects/cs-projects" label="Back to CS Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/cs-projects/automatic-speech-recognition-asante-twi"
        title="Automatic Speech Recognition System for Asante Twi"
        description="Developed an ASR system for Asante Twi, a Ghanaian language with limited digital resources"
        image={`/api/og/generate?title=${encodeURIComponent("Automatic Speech Recognition System for Asante Twi")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
        <Text 
          as="a" 
          href="/projects/cs-projects" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          Back to CS Projects
        </Text>
      </Row>

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">Automatic Speech Recognition System for Asante Twi</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Deep Learning Project • Nov 2024 - Dec 2024
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" align="center">
        <div style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "600px", 
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/projects/speech-recognition.jpg"
            alt="Automatic Speech Recognition System for Asante Twi"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          For our CS464 Deep Learning final project, my teammate and I developed an Automatic Speech Recognition (ASR) system for Asante Twi, a Ghanaian language with very limited digital resources. Our objective was to build a model capable of converting spoken Twi into accurate text transcriptions, evaluated by Character Error Rate (CER) and Word Error Rate (WER).
        </Text>

        <Text variant="body-default-l">
          We began with the Financial Inclusion Speech Dataset, which we cleaned and preprocessed to standardize audio formats and refine transcriptions. Features were extracted using Mel-Frequency Cepstral Coefficients (MFCCs), chosen for their effectiveness in capturing the perceptual aspects of speech.
        </Text>

        {/* Technical Approach */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Approach</Heading>
            <Text variant="body-default-m">
              Rather than relying on pre-trained ASR models trained on high-resource languages, we designed a sequence-to-sequence LSTM-based encoder–decoder model from scratch. The encoder processed MFCC features while the decoder generated character-level predictions, overcoming early issues encountered with word-level tokenization.
            </Text>
            <Text variant="body-default-m">
              Our architecture featured LSTM layers with 1024 hidden units, an embedding layer of dimension 128, and a Softmax output layer for character probabilities. Training was performed with the Adam optimizer, sparse categorical cross-entropy loss, and early stopping to mitigate overfitting.
            </Text>
            <Text variant="body-default-m">
              We split the dataset into 76% training, 19% validation, and 5% testing, with a batch size of 512.
            </Text>
          </Column>
        </Card>

        {/* Results */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Results & Performance</Heading>
            <Text variant="body-default-m">
              On curated test samples, the model achieved a CER of 0.0714 and WER of 0.20, demonstrating strong baseline performance. However, when tested on more diverse, real-world audio, performance dropped significantly (CER ≈ 0.61, WER ≈ 0.85), highlighting the limitations of data scarcity and the need for broader, domain-general Twi speech corpora.
            </Text>
            <Text variant="body-default-m">
              Despite these challenges, the project proved that low-resource languages like Asante Twi can be modeled with deep learning, setting a foundation for future improvements through larger datasets or transfer learning.
            </Text>
          </Column>
        </Card>

        {/* Key Achievements */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              On curated test samples, the model achieved a CER of 0.0714 and WER of 0.20, demonstrating strong baseline performance. However, when tested on more diverse, real-world audio, performance dropped significantly (CER ≈ 0.61, WER ≈ 0.85), highlighting the limitations of data scarcity and the need for broader, domain-general Twi speech corpora.
            </Text>
            <Text variant="body-default-m">
              Despite these challenges, the project proved that low-resource languages like Asante Twi can be modeled with deep learning, setting a foundation for future improvements through larger datasets or transfer learning.
            </Text>
            <Text variant="body-default-m">
              <strong>Deployed Model Link:</strong>{" "}
              <Text as="a" href="https://huggingface.co/spaces/sedemkofi/twi-transcription" target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "underline" }}>
                https://huggingface.co/spaces/sedemkofi/twi-transcription
              </Text>
            </Text>
          </Column>
        </Card>

        {/* Technologies & Deployment */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technologies & Deployment</Heading>
            <Text variant="body-default-m">
              <strong>Tools & Technologies:</strong> Python, TensorFlow/Keras, MFCCs, LSTMs, Sequence-to-Sequence Models, Adam Optimizer, Hugging Face Spaces
            </Text>
            <Text variant="body-default-m">
              <strong>Deployed Model:</strong>{" "}
              <Text as="a" href="https://huggingface.co/spaces/sedemkofi/twi-transcription" target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "underline" }}>
                Try the Live Demo on Hugging Face Spaces
              </Text>
            </Text>
          </Column>
        </Card>

        {/* Learning Outcomes */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              As a team, we learned to balance data preprocessing, model design, and evaluation, while also deploying our model on Hugging Face Spaces for public interaction. The experience deepened our understanding of speech recognition pipelines, sequence models, and the challenges of low-resource NLP, while also sparking interest in building more inclusive AI systems for underrepresented languages.
            </Text>
          </Column>
        </Card>
      </Column>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `
      }} />
    </Column>
  );
}
