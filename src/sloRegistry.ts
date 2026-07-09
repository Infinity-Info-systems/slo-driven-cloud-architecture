export type SloLayer = 'Journey' | 'Measurement' | 'Threshold' | 'Control' | 'Reporting';

export type BudgetState = 'Healthy' | 'Burning' | 'Paused' | 'Review';

export interface SloObjective {
  service: string;
  owner: string;
  sli: string;
  target: string;
  budget: BudgetState;
}

export interface SloLayerEntry {
  layer: SloLayer;
  question: string;
  artifact: string;
}

export interface SloRegistry {
  repository: string;
  purpose: string;
  layers: SloLayerEntry[];
  objectives: SloObjective[];
  decisionRule: string;
  governanceQuestions: string[];
  operatingPrinciples: string[];
}

export const sloRegistry: SloRegistry = {
  repository: 'SLO-Driven Cloud Architecture',
  purpose:
    'Design cloud systems around service level objectives, error budgets, and reliability tradeoffs that guide delivery decisions.',
  layers: [
    {
      layer: 'Journey',
      question: 'What user experience matters?',
      artifact: 'SLO strategy',
    },
    {
      layer: 'Measurement',
      question: 'What will we observe?',
      artifact: 'SLI examples',
    },
    {
      layer: 'Threshold',
      question: 'What is acceptable?',
      artifact: 'SLO template',
    },
    {
      layer: 'Control',
      question: 'When do we slow down?',
      artifact: 'Error budget model',
    },
    {
      layer: 'Reporting',
      question: 'What should leaders see?',
      artifact: 'Executive reporting',
    },
  ],
  objectives: [
    {
      service: 'Customer portal',
      owner: 'Service owner',
      sli: 'Availability and latency',
      target: '99.9% / < 300ms',
      budget: 'Healthy',
    },
    {
      service: 'API gateway',
      owner: 'Platform team',
      sli: 'Error rate and saturation',
      target: '99.95% / low error burn',
      budget: 'Review',
    },
    {
      service: 'Data pipeline',
      owner: 'Data platform lead',
      sli: 'Freshness and throughput',
      target: 'Hourly freshness',
      budget: 'Paused',
    },
  ],
  governanceQuestions: [
    'What matters most to protect?',
    'When should delivery slow down?',
    'What tradeoff are we making between reliability and cost?',
  ],
  operatingPrinciples: [
    'SLOs should change behavior.',
    'Targets should be tied to a user journey.',
    'Error budgets should guide release decisions.',
    'Owners should understand the tradeoffs they are making.',
  ],
  decisionRule:
    'If an SLO does not change behavior or decision-making, it is probably not useful enough to keep as a first-class objective.',
};

export function getSloOverview() {
  return {
    repository: sloRegistry.repository,
    purpose: sloRegistry.purpose,
    layerCount: sloRegistry.layers.length,
    objectiveCount: sloRegistry.objectives.length,
    healthyBudgets: sloRegistry.objectives.filter((objective) => objective.budget === 'Healthy').length,
  };
}
