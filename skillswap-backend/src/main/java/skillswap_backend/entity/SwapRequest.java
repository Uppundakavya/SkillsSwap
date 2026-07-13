package skillswap_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "swap_requests")
public class SwapRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long senderId;

    private Long receiverId;

    private String senderSkill;

    private String receiverSkill;

    private String status;

    public SwapRequest() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Long receiverId) {
        this.receiverId = receiverId;
    }

    public String getSenderSkill() {
        return senderSkill;
    }

    public void setSenderSkill(String senderSkill) {
        this.senderSkill = senderSkill;
    }

    public String getReceiverSkill() {
        return receiverSkill;
    }

    public void setReceiverSkill(String receiverSkill) {
        this.receiverSkill = receiverSkill;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
