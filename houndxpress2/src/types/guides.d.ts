export interface Guide {
  guide__number: string;
  guide__origin: string;
  guide__destination: string;
  guide__recipient: string;
  guide__stage: GuideStage[];
}

export interface GuideStage {
  guide__date: string;
  guide__status: string;
  guide__hour: string;
}

